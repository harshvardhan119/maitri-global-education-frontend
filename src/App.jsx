import './App.css'
import './font.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Scholarship from './pages/Scholarship';
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services';
import Locations from './components/Locations';
import Badge from './components/Badge';
import Blogs from './components/Blogs';
import Testomonials from './components/Testomonials';
import Scholarships from './components/Scholarships';
import Event from './components/Event';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/" element={
            <>
              {/* Home page content remains unchanged */}
              <Hero/>
              <About/>
              <Locations/>
              <Services/> 
              <Badge/>
              <Scholarships/>
              <Testomonials/>   
              <Event/>    
              <Blogs/>
            </>
          } />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App
