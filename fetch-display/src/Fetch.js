import React from 'react'
import { useEffect,useState } from 'react'
function Fetch() {
    const[data,setData] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
                
            const res = await fetch('https://fakestoreapi.com/products/category/electronics')
            const jsonData = await res.json()
            console.log(jsonData)
            setData(jsonData)

        }
    fetchData()
    },[])

  return (
    <center>
    <div className='main'>
        {
            data && data.map((el)=>( 
                <div className='child' key={el.id}>
                <img src={el.image} alt="" className='img'/>
                <h2>{el.title}</h2>
                <h2>{el.price} $</h2>
                </div>  )
            
            )
        }
    </div>
    </center>
  )
}

export default Fetch