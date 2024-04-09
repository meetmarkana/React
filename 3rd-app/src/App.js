import './App.css';
import Navbar from './Navbar';
import Story from './Story';
import Items from './Items';
import Discount from './Discount';
import Ratings from './Ratings';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Story/>
      <Items/>
      <Discount/>
      <Ratings/>
      <Footer/>
    </div>
  );
}

export default App;
