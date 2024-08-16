import './App.css';
import Home from './components/Home.';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom';

function App() {
  return (
  
  <>
    <Router>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </Router>
  </>

  );
}

export default App;
