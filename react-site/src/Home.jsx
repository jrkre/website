import React from 'react';
import { motion } from 'framer-motion';
import headshot from './img/yellow_dither_headshot.png';


function Home() {
  return (
    <div>
        <div className='flex align-center card'>
            <motion.img src={headshot} className="headshot" alt="headshot" />
            <div className='flex flex-col justify-center ml-4'>
                <p>hello, i'm jay knight (they/she)</p>
                <p>computer science and engineering student</p>
                <p>robotics tinkerer</p>
                <p>(and cat enthusiast!!!)</p>
                

                {/* <p>(and cat enthusiast!!!)</p>
                <br /> */}
                <iframe src="https://giphy.com/embed/3o7TKNkzG2YLWPpYBO" height="150" className="giphy-embed" allowFullScreen></iframe>
            </div>
        </div>
    </div>
  );
}

export default Home;