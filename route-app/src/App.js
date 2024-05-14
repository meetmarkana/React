import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Addpost from './Addpost';
import { useState } from 'react';

function App() {

  const [posts, setPosts] = useState([])

  function addnewPost(title,Description){
    let newPost = {
      id : new Date().getTime(),
      title : title,
      Description : Description
    }
    setPosts([...posts, newPost])
  }
  function deletepost(id){
    setPosts(posts.filter((el)=>(
      el.id !== id
  )))}
  return (
    <Router>
      <div className="App">
     <Routes>
      <Route path="/" element={<Home posts={posts} deletepost={deletepost} />} />
      <Route path = "/add" element = {<Addpost addnewPost = {addnewPost}/>}></Route>
     </Routes>
     </div>
    </Router>
  );
}

export default App;