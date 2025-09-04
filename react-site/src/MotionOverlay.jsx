import { motion } from 'framer-motion';
import React from 'react';
import './static/App.css';
import logo from './temp_logo.png';

const LOGO_WIDTH = 450; // adjust to your overlay logo's width
const LOGO_HEIGHT = 100; // adjust to your overlay logo's height

const MotionOverlay = ({ targetPos, motion_delay }) => {
  // Center of viewport minus half logo size
  const centerX = window.innerWidth / 2 - LOGO_WIDTH / 2;
  const centerY = window.innerHeight / 2 - LOGO_HEIGHT / 2;

  return (
    <div className="motion-overlay">
      <motion.div
        className="logo-overlay"
        initial={{
          x: centerX,
          y: centerY,
          scale: 1,
          opacity: 1,
        }}
        animate={{
          x: targetPos?.x ?? centerX,
          y: targetPos?.y ?? centerY,
          scale: 0.5,
          opacity: 0,
        }}
        transition={{ delay: motion_delay, duration: 0.7, ease: "easeInOut" }}
      >
        <div className="logo-anim">
          <motion.img
            src={logo}
            className="logo"
            alt="logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          <div className="logo-text">jay knight</div>
        </div>
      </motion.div>
    </div>
  );
};

export default MotionOverlay;