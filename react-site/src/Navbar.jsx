import { motion } from 'framer-motion';
import './static/App.css'
import './static/Navbar.css';
import logo from './static/jk_logo.svg';
import { Link } from 'react-router-dom';

function Navbar ( { fade_in_time, logoRef } )
{
    return (
        <motion.header
          className="topbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: fade_in_time }} // delay matches overlay move
          >
          <div className="topbar-left">
            <motion.div
              className="topbar-logo crt-text"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: fade_in_time, ease: "easeOut" }}
              whileHover={{ scale: 1.5  }} // nice hover effect
              whileTap={{ scale: 0.8 }} // nice click feedback
              >
              <Link className="topbar-logo" to="/">
                <img
                  ref={logoRef}
                  src={logo}
                  className="logo"
                  alt="logo" />
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
          {/* <nav className="nav-mobile">
            <a href="#">Home</a>
            <a href="#">Work</a>
            <a href="#">Contact</a>
          </nav> */}
        </motion.header>
        );
}

export default Navbar;