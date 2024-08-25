import './App.css';
import Home from './components/Home.';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import ViewProject from './components/ViewProject'
import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import Projects from './components/Projects';
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Ourservices from "./components/Ourservices";
function App() {
  return (

  <>
    <Router>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/View-project/:id" element={<ViewProject/>} />
          <Route path="/our-services/:category" element={<Ourservices/>} />
      </Routes>
      <Testimonials/>
      <AboutUs/>
    </Router>
  </>

  );
}

export default App;
