import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import headshot from './img/headshot_orange.png';

function Home() {
  const lines = [
    "hello, i'm jay knight :)",
    'computer science and engineering student',
    'robotics tinkerer',
    '(and cat enthusiast!!!)'
  ];

  const [displayedText, setDisplayedText] = useState(['', '', '', '']);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    if (lineIdx < lines.length) {
      if (charIdx < lines[lineIdx].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => {
            const newLines = [...prev];
            newLines[lineIdx] += lines[lineIdx][charIdx];
            return newLines;
          });
          setCharIdx(charIdx + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLineIdx(lineIdx + 1);
          setCharIdx(0);
        }, 350);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => setShowGif(true), 500);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, lineIdx, lines]);

  return (
    <div className="home80s">
      <motion.img
        src={headshot}
        alt="headshot"
        className="headshot80s"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <div className="terminal">
        {displayedText.map((line, i) => (
          <div key={i}>
            {line}
            {i === lineIdx && lineIdx < lines.length ? (
              <span className="cursor80s">_</span>
            ) : null}
          </div>
        ))}
        {showGif && (
          <motion.iframe
            src="https://giphy.com/embed/3o7TKNkzG2YLWPpYBO"
            height="160"
            width="220"
            allowFullScreen
            title="cat gif"
            className="gif80s"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
