import logo from './logo.svg';
import './App.css';
// import Form from './Form';
import Login from './Login';
import { useState,useEffect } from 'react';
function App() {
  const[data,setData]=useState(null)

  
  useEffect(()=>{

    const fetchData = async () =>{

      let response = await fetch('https://fakestoreapi.com/products')
      let jsondata= await response.json()

      setData(jsondata)
      console.log(data)
    }cd 
    fetchData()
  },[])


return (
<center>
<Login data={data}/>
</center>

  );

}

export default App;
