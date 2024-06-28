import React, { useEffect, useState } from 'react'
import { auth, provider } from './Config'
import Home from './Home'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'

function Signin() {

    const [value, setValue] = useState("")

    const handleClick=()=>{
        signInWithPopup(auth , provider)
        .then((data)=>{
            setValue(data.user)
            localStorage.setItem("email", data.user.email)
            console.log(data.user)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const handleSignout=()=>{
      signOut(auth)
      .then(()=>{
        localStorage.removeItem("email",)
        setValue('')

      }).catch((error)=>{
        console.log(error)
      })
    }

    useEffect(()=>{
        let userEmail = localStorage.getItem("email")
        if(userEmail){
setValue(userEmail)
        }
    },[])
  return (
    <div>
      {value ? 
      
      <>

       <h1>Welcome  : {value.displayName}</h1>
      <h1>Email : {value.email}</h1>
      <img src={value.photoURL} alt="" /> 

      <Home/>

      <button onClick={handleSignout}>Sign Out</button>
      </>
      : <button onClick={handleClick}>SingIN With Email</button>}
    </div>
  )
}

export default Signin