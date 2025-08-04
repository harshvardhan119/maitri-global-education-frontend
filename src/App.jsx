import './App.css'
import './font.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services';
import Locations from './components/Locations';
import Badge from './components/Badge';
import Blogs from './components/Blogs';
import Testomonials from './components/Testomonials';
import Footer from './components/Footer';
import Scholarships from './components/Scholarships';
import Event from './components/Event';

function App() {


  return (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Locations/>
  <Services/> 
  <Badge/>
  <Scholarships/>
  <Testomonials/>   
  <Event/>    
  <Blogs/>
  <Footer/>
  </>
  )
}

export default App
