import React from 'react'
import { useState } from 'react'

const Counter = (props) => {

    const [count,setcount]=useState(0)

    function increment(){
      setcount(count + 1 )
    }

    function decrement(){
      if(count == 0){
        setcount(0)
      }else{
        setcount(count - 1)
      }
    }

    function reset(){
      setcount(0)
    }

  return (

    <div className='main'>
      
      
      <h1>{props.name}</h1>

        <img src={props.img} alt="" />

        <h2>LIKE : {count}</h2>

        <div className='number' >

            <button onClick={increment} className='btn'>+</button>&nbsp;&nbsp;
            <button onClick={decrement} className='btn'>-</button>&nbsp;&nbsp;
            <button onClick={reset} className='btn'>RESET</button>
        </div>

    </div>
  )
}

export default Counter