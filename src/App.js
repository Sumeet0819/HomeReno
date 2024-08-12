import './App.css';
import Home from './components/Home.';
import Navbar from './components/Navbar';
import Tagline from "./components/Tagline";
import Projects from "./components/Projects";
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';

function App() {
  return (
<>
    <Navbar />
    <Home />
      <Tagline />
      <Projects/>
      <Testimonials/>
      <AboutUs/>
      </>
  );
}

export default App;
