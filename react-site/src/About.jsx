import './output.css';
import './static/App.css';
import React from 'react';

function About() {
	return (
		<div className="bg-gray-950 py-10 min-h-screen crt-text">
			<div className="bg-gray-950 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
				{/* Header Card */}
				   <section className="resume-header">
					   <div className='flex-col'>
						   {/* <img src={require('./img/Lambda-no-background.png')} alt="Lambda School Logo" className="logo-sketch-photo rounded-lg shadow-md  mx-auto mb-2" /> */}
					   		<div className="flex items-center">
						   		<img src={require('./img/dither_it_IMG_0917.png')} alt="Self portrait" className="headshot-photo rounded-lg shadow-md object-cover mx-auto mb-2" />
						   		<div className="flex-col" style={{textAlign: 'justify'}}>
							   		<h1 style={{textAlign: 'justify'}}>jay knight</h1>
							   		<p style={{textAlign: 'justify'}}>about me</p>
						   	</div>
					   	</div>
					   </div>
				   </section>

				{/* Photography Showcase */}
				<section className="resume-section">
					<h2>Photography</h2>
					<p>I enjoy capturing photos of my passing moments. Here are a few of my favorites that I've stumbled into:</p>
					<div
						className="grid grid-cols-2 gap-4 my-4"
						style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
					>
						<img src={require('./img/slide1.jpg')} alt="Photography 1" className="about-photo rounded-lg shadow-md object-cover" />
						<img src={require('./img/slide2.jpg')} alt="Photography 2" className="about-photo rounded-lg shadow-md object-cover" />
						<img src={require('./img/slide3.jpg')} alt="Photography 3" className="about-photo rounded-lg shadow-md object-cover" />
					    <img src={require('./img/slide4.jpg')} alt="Photography 4" className="about-photo rounded-lg shadow-md object-cover" />
					</div>
				</section>
				
				{/* More About Me */}
				<section className="resume-header">
					<h2>More About Me</h2>
					<p>
						I love retro computing, 90's internet, and all things vintage tech.
						<br />
						Enthusiastic about robotics, technology, and creative projects.
                        <br />
                        I love playing guitar, hiking, traveling, and exploring new places.
                        <br />
						Always up for a good book or a photography walk.
                        <br />
                        In my spare time I manage my own home server, dabbling in various self-hosted applications and services (this site is running on my own machine!).
						<br />
					</p>
				</section>

				{/* My Dog */}
				<section className="resume-section">
					<h2>My Dog</h2>
					<p>Tana, my best friend and adventure buddy! Whether we're hiking, playing fetch, or just relaxing, my dog brings so much joy to my life.</p>
                    <div className='flex justify-center gap-4 my-4'>
                        <img src={require('./img/yellow_dither_tana.png')} alt="My dog" className="tana-photo rounded-lg shadow-md object-cover my-4" />
                        <img src={require('./img/yellow_dither_tana1.png')} alt="My dog" className="tana-photo rounded-lg shadow-md object-cover my-4" />
                    </div>
				</section>

				<section className="sketch-background">
					<img src={require('./img/Lambda-no-background.png')} alt="Lambda School Logo" className="logo-sketch-photo rounded-lg shadow-md  mx-auto mb-2" />
				</section>
			</div>
		</div>
	);
}

export default About;
