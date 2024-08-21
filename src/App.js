import './App.css';
import Home from './components/Home.';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import ViewProject from './components/ViewProject'
import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom';

function App() {
  return (

  <>
    <Router>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/View-project/:id" element={<ViewProject/>} />
      </Routes>
    </Router>
  </>

  );
}

export default App;
