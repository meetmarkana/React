import React from 'react'
import { useState } from 'react'

function Todo() {

    const[inputValue,setInputValue]=useState('')
    const[todos,setTodos]=useState([])


    localStorage.setItem("ttoo",JSON.stringify(todos))


     function addTask()
     {
        let newTodos=
        {
          text:inputValue
        }

        setTodos([...todos,newTodos])

        setInputValue('')



     }
   
  return (
    <div>
        <h1>TODO LIST</h1>

        <br /> <br />

        <input type="text" placeholder='Enter your Task' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={addTask}>Add</button>


        {
            todos.map((el,i)=>(
                <>
                <h1 key={i}>{el.text}</h1>
                </>
            ))
        }

    </div>
  )
}

export default Todo