import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

function Addpost({addnewPost}) {

    const [title,setTitle] = useState('')
    const [Description,setDescription] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        addnewPost(title,Description)
        navigate('/')
    }
  return (
    <div>
      <h2>ADD POST</h2>

    <form onSubmit={handleSubmit}>
        <h1>Title : </h1>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/><br/><br/>

        <h1>Description :</h1>
        <textarea value={Description} onChange={(e)=>setDescription(e.target.value)}></textarea> <br/><br/><br/>

        <button type='submit'>ADD POST</button><br/><br/><br/>
    </form>


      <Link to = "/">Back TO Home Page</Link>
    </div>
  )
}

export default Addpost