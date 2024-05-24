import React from 'react'
import './App.css';
import { useState } from 'react'

function Login(props) {
    const [isLoggedIn , setisLoggedIn] = useState(false)

   
    function handleOut(){
        setisLoggedIn(false)
    }
    const [formdata , setformdata] = useState({
        username : '',
        email : '',
        password : ''
    })  

    const [errors , setErrors]=useState({})
    
    function handleinput(e){
        const {name , value} = e.target
        setformdata({
            ...formdata,
            [name] : value
        }) 
    }

    function handlesubmit(e){
e.preventDefault()
console.log(formdata)

let errors = validate(formdata)
setErrors(errors)
if(Object.keys(errors).length === 0){
// alert("Submitted")
setisLoggedIn(true)
}
else{
    setErrors(errors)
}
}
    function validate(values){
  let errors = {}
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if(!values.username){
    errors.username = "Username is required"
  }
  if(!regex.test(values.email)){
    errors.email = "Email is not valid"
  }
  if(!values.password){
    errors.password = "Password is required"

  }
  else if(values.password.length<8){
    errors.password = "Password must be more than 8 characters"
  }
  return errors
  }
    

  return (
    <div>

<div className="main">
             {
        isLoggedIn ?
        (
            <>                
             {
    
    <div className='heading main'   >
        {
            props.data &&  props.data.map((el) => (
                <div className='child' key={el.id}>
                <center>
                <img src={el.image} alt="" className='img'/>
                <h2>{el.title}</h2>
                <h2>{el.price} $</h2>
                
                <button>Add to Cart</button>
                </center>
                </div>      
                ))
        }
    </div>
    
    
    }<br/><br/><br/>
     <button onClick={handleOut} className='but'>Log Out</button>
    </>
        ):
        (
    <>
        <form onSubmit={handlesubmit} className='form-container '>
        <label >Enter your username : </label>
        <input type="text" name='username' value={formdata.username} onChange={handleinput}/>
        <p className='error'>{errors.username}</p>
        <br/>
        <label > Enter your Email : </label>
        <input type="text" name='email' value={formdata.email} onChange={handleinput} />
        <p className='error'>{errors.email}</p>
        <br/>
        <label >Enter your Password : </label>
        <input type="text" name='password' value={formdata.password} onChange={handleinput}/>
        <p className='error'>{errors.password}</p>
        <br/>
        <button type='Submit'>Submit</button>
        </form>
        
    
    </>
        )
    }

         
</div>

    </div>
  )
}


export default Login