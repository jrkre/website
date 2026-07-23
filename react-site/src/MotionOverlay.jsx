import { motion } from 'framer-motion';
import React from 'react';
import logo from './img/Lambda-no-background.png';

const LOGO_WIDTH = 300; // adjust to your overlay logo's width
const LOGO_HEIGHT = 300; // adjust to your overlay logo's height

const MotionOverlay = ({ targetPos, motion_delay }) => {
  // Center of viewport minus half logo size
  const centerX = window.innerWidth / 2 - LOGO_WIDTH / 2;
  const centerY = window.innerHeight / 2 - LOGO_HEIGHT / 2;

  return (
    <div className="motion-overlay crt-text crt-image">
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
          scale: 0.26,
          opacity: 0,
        }}
        transition={{ delay: motion_delay, duration: 0.7, ease: "easeInOut" }}
      >
        <div className="logo-anim">
          <motion.img
            src={logo}
            className="logo"
            alt="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default MotionOverlay;