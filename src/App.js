import './App.css';
import Home from './components/Home.';
import Navbar from './components/Navbar';
import Tagline from "./components/Tagline";
import Projects from "./components/Projects";
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Services from './components/Services';

function App() {
  return (
<>
    <Navbar />
    <Home />
      <Tagline />
      <Services />
      <Projects/>
      <Testimonials/>
      <AboutUs/>
      </>
  );
}

export default App;
