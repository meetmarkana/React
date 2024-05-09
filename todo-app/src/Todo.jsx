import React from 'react'
import { useState } from 'react'

function Todo() {
    const [inputvalue , setinputvalue] = useState('')
    const [todos , settodos] = useState([])
    const[edited ,setEdited ]= useState(null)
    localStorage.setItem("todo",JSON.stringify(todos))

    function addtask() {
      if (edited !== null) {
        settodos(todos.map(todo => {
          if (todo.id === edited) {
            return { ...todo, task: inputvalue }; 
          }
          return todo;
        }));
        setEdited(null);
        setinputvalue('');
      } else {
        let newtodos = {
          id: new Date().getTime(),
          task: inputvalue
        };
        settodos([...todos, newtodos]);
        setinputvalue('');
      }
    }
    
   function deleteTodo(id){
    settodos(todos.filter((todo)=>(

      todo.id !== id
    )

    ))

   }
   function editTodo(id) {
    const todoToEdit = todos.find(todo => todo.id === id);
    setinputvalue(todoToEdit.task); 
    setEdited(id);
  }
  
  return (
    <div className="container">
      <div className="todo-header">TO-DO LIST</div>
      <div className="input-container">
        <input type="text" placeholder='Enter your task' value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)} />
        <button onClick={addtask}>Add Task</button>
      </div>
      {todos.map((el , i)=>(
        <div className="todo-item" key={i}>
          <p>{el.task}</p>
          <div>
            <button onClick={()=>editTodo(el.id)}>Edit</button>
            <button onClick={()=>deleteTodo(el.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )

}

export default Todo