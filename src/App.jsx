import './App.css'
import './font.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Scholarship from './pages/Scholarship';
import Abt from './pages/About';
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services';
import Locations from './components/Locations';
import Badge from './components/Badge';
import Blogs from './components/Blogs';
import Testomonials from './components/Testomonials';
import Scholarships from './components/Scholarships';
import Event from './components/Event';

import Explore from './pages/Explore';

import Careers from './components/Careers';
import University from './components/University';
import ScholarshipForm from './pages/ScholarshipForm';
import Blogsind from './pages/Blogs';
import Eventsind from './pages/Events';
import BlogsForm from './pages/BlogsForm';



function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/about" element={<Abt/>} />
          <Route path="/explore" element={<Explore/>}/>
          {/* added for testing */}
          <Route path="/scholarship-form" element={<ScholarshipForm/>}/>
          <Route path="/events" element={<Eventsind/>}/>
          <Route path="/blogs" element={<Blogsind/>}/>
          <Route path="/events" element={<Event/>}/>
          <Route path="/blogs-form" element={<BlogsForm/>}/>
          {/* <Route path="/services" element={<Serices/>}/> */}
          
          <Route path="/" element={
            <>
             
              <Hero/>
              <About/>
              <Locations/>
              <Services/> 
              <Badge/>
              <Scholarships/>
              <Testomonials/> 
              <University/>
              <Careers/> 
              <Event/>    
              {/* <ab/> */}
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
