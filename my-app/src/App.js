import './App.css';
import Footer from './Footer';
import Mission from './Mission';
import Navbar from './Navbar'
import NewIn from './NewIn';
import Section from './Section';
import ShopCollection from './ShopCollection';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <NewIn />
      <ShopCollection />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;
