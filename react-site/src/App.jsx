import './static/App.css';
import './output.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React , { useRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import MotionOverlay from './MotionOverlay';
import Work from './Work';
import Home from './Home';
import Contact from './Contact';
import About from './About';


function App() {
  const logoRef = useRef(null);
  const [targetPos, setTargetPos] = useState();


  useEffect(() => {
    function updateTargetPos() {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();
      setTargetPos({
        x: rect.left,
        y: rect.top,
      });
    }
  }
  updateTargetPos();
  window.addEventListener('resize', updateTargetPos);
  return () => window.removeEventListener('resize', updateTargetPos);
  }, []);

  return (
      <Router>
        <div className="site">
          {/* Fixed top bar (hidden until the overlay docks) */}
          <Navbar logoRef={logoRef} fade_in_time={1.6} />
          <MotionOverlay targetPos={targetPos} motion_delay={1} />
          {/* Page content starts below the topbar height */}
          <main className="content">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/work" element={<Work />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<About />}></Route>
              </Routes>
        </main>
      </div>
      <footer className="footer">
       <div className="footer-content">
         <div className="footer-left">
           <h2 className="logo">jay knight</h2>
           <p>&copy; 2025 jay knight. all rights reserved.</p>
           <p>built with love, hosted with care</p>
         </div>
       </div>
      </footer>
    </Router>

  );
}

export default App;
