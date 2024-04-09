// import logo from './logo.svg';
import './App.css';
import img from './img.jpeg'
import Promt from './Prompt'
function App() {
  return (
    <div className="App">
      <Promt  img={img} name="AI Generated"/>
    </div>
  );
}

export default App;