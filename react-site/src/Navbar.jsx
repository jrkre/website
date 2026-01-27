import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './static/App.css';
import './static/Navbar.css';
import logo from './static/jk_logo.svg';
import { Link } from 'react-router-dom';

function Navbar({ fade_in_time, logoRef }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        className="topbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: fade_in_time }}
      >
        <div className="topbar-left">
          <motion.div
            className="topbar-logo crt-text"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: fade_in_time, ease: 'easeOut' }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className="topbar-logo" to="/" onClick={() => setMenuOpen(false)}>
              <img ref={logoRef} src={logo} className="logo" alt="logo" />
              <div className="logo-text crt-logo">jay knight</div>
            </Link>
          </motion.div>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Hamburger (mobile only) */}
        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="nav-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
