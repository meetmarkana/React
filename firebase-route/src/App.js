import './App.css';
import Home from './Home';
import Signup from './Signup';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>

    <Router>

      <Routes>

      <Route path='/' element={<Home/>} />

      <Route path='/login' element={<Signup/>} />

      </Routes>

    </Router>

    </>
  );
}

export default App;