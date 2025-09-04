import './static/App.css';
import './output.css';
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React , { useRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import MotionOverlay from './MotionOverlay';
import Work from './Work';
import Home from './Home';
import Contact from './Contact';
import headshot from './img/headshot.png';
import logo from './temp_logo.png';


function App() {

  const [headerVisible, setHeaderVisible] = useState(false);
  const logoRef = useRef(null);
  const [targetPos, setTargetPos] = useState();


  useEffect(() => {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();
      setTargetPos({
        x: rect.left,
        y: rect.top,
      });
    }
  }, [logoRef.current]);

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
          </Routes>
        </main>
      </div>
    </Router>

  );
}

export default App;
