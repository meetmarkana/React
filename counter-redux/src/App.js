import { increment, decrement } from "./Redux/Action";
import { useSelector, useDispatch } from "react-redux";
import './App.css'

function App() {
  const count = useSelector(state => state.counter1.count);
  const dispatch = useDispatch();

  return (
    <>
    <div className="main">
    <h1 className="heading">Counter App</h1>
      <div className="boxes">
        <div className="box">
        <h1>Counter : {count}</h1>
        <div className="btns">
        <button onClick={() => { dispatch(increment()) }}>Inc +</button><br/><br/>
        <button  onClick={() => { dispatch(decrement()) }}>Dec -</button>
        </div>
        </div>

      </div>
    </div>
      
    </>
  );
}

export default App;