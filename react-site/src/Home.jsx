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
        //wait .5 s before starting animation
        if (lineIdx === 0 && charIdx === 0) {
          const timeout = setTimeout(() => setCharIdx(0), 1000);
          clearTimeout(timeout);
        }
        const timeout = setTimeout(() => {
          setDisplayedText(prev => {
            const newLines = [...prev];
            newLines[lineIdx] = newLines[lineIdx] + lines[lineIdx][charIdx];
            return newLines;
          });
          setCharIdx(charIdx + 1);
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        // Move to next line after a short pause
        const timeout = setTimeout(() => {
          setLineIdx(lineIdx + 1);
          setCharIdx(0);
        }, 350);
        return () => clearTimeout(timeout);
      }
    } else {
      // Typing finished, fade in gif after short delay
      const timeout = setTimeout(() => setShowGif(true), 400);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, lineIdx, lines]);

  return (
    <div className="bg-gray-950 py-10 min-h-screen">
  <style>{`
        .typewriter-text {
          font-family: 'Consolas', monospace;
          color: #F4B43E;
          // font-size: 1.2rem;
          // letter-spacing: 0.01em;
          white-space: pre-line;
        }
        .typewriter-cursor {
          display: inline-block;
          width: 1ch;
          color: #F4B43E;
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .fade-in-gif {
          opacity: 0;
          transition: opacity 1s cubic-bezier(.4,0,.2,1);
        }
        .fade-in-gif.visible {
          opacity: 1;
        }
      `}</style>
      <div className='flex align-center card home'>
        <motion.img src={headshot} className="headshot crt-image" alt="headshot" />
        <div className='flex flex-col justify-center ml-4'>
          <div className="typewriter-text mb-4 crt-text">
            {displayedText.map((line, i) => (
              <div key={i}>
                {line}
                {i === lineIdx && lineIdx < lines.length ? <span className="typewriter-cursor">_</span> : null}
              </div>
            ))}
          </div>
          <iframe
            src="https://giphy.com/embed/3o7TKNkzG2YLWPpYBO"
            height="150"
            width="210"
            className={`giphy-embed fade-in-gif${showGif ? ' visible' : ''}`}
            allowFullScreen
            style={{ pointerEvents: showGif ? 'auto' : 'none' }}
            title="cat gif"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;