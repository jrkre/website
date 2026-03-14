import './output.css';
import './styles/components/About.css';
import React from 'react';

function About() {
	return (
		<div className="about-container">
			{/* System Header - Terminal Style */}
			<section className="about-terminal-header">
				<div className="terminal-title-bar">
					<span className="terminal-button">■</span>
					<span className="terminal-label">USER_PROFILE.SYS</span>
					<span className="terminal-button">□</span>
					<span className="terminal-button">✕</span>
				</div>
				<div className="about-header-content">
					<div className="about-header-grid">
						<div className="about-headshot-container">
							<img src={require('./img/yellow_dither_selfie.png')} alt="Self portrait" className="about-headshot-large" />
						</div>
						<div className="about-header-info">
							<div className="about-system-info">
								<div className="system-line"><span className="system-prompt">$</span> whoami</div>
								<div className="system-output">jay knight</div>
								<div className="system-line"><span className="system-prompt">$</span> system --info</div>
								<div className="system-output">developer | creator | explorer</div>
								<div className="system-output">{`interests[] = { retro_tech, photography, adventure }`}</div>
								{/* <div className="system-output"></div> */}
								{/* <div className='system-output'></div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="about-module">
				<div className="module-header">
					<div className="module-title">
						<span className="module-icon">►</span>USER_BIO
					</div>
				</div>
				<div className="module-content">
					<p className="module-description">I'm Jay, a software developer and tech enthusiast based in <span className="location-tag">us-west</span>. I enjoy building web applications, exploring new technologies, and capturing moments through photography.</p>
					<p className="module-description">When I’m not coding or behind a camera, you can find me hiking with my dog Tana, tinkering with retro computers, or experimenting with electronics projects.</p>
					<p className="module-description">Feel free to explore my site to see some of my work and interests!</p>
				</div>
			</section>

			{/* Photography Section - Grid Display */}
			<section className="about-module">
				<div className="module-header">
					<div className="module-title">
						<span className="module-icon">◆</span> MEDIA_ARCHIVE
					</div>
				</div>
				<div className="module-content">
					<p className="module-description">I like taking photos of everyday moments. Here are a few favorites I’ve managed to catch along the way:</p>
					<div className="about-photo-grid">
						<div className="about-photo-card">
							<img src={require('./img/slide1.jpg')} alt="Photography 1" className="about-photo" />
						</div>
						<div className="about-photo-card">
							<img src={require('./img/slide2.jpg')} alt="Photography 2" className="about-photo" />
						</div>
						<div className="about-photo-card">
							<img src={require('./img/slide3.jpg')} alt="Photography 3" className="about-photo" />
						</div>
						<div className="about-photo-card">
							<img src={require('./img/slide4.jpg')} alt="Photography 4" className="about-photo" />
						</div>
					</div>
				</div>
			</section>

			{/* Interests & Passions Section */}
			<section className="about-module">
				<div className="module-header">
					<div className="module-title">
						<span className="module-icon">►</span> USER_ATTRIBUTES
					</div>
				</div>
				<div className="module-content">
					<div className="about-attributes-list">
						<div className="about-attribute-item">
							<span className="attribute-label">[RETRO_TECH]</span>
							<p>I love retro computing, 90s internet culture, and pretty much anything involving vintage technology, history, and technical design constraints.</p>
						</div>
						<div className="about-attribute-item">
							<span className="attribute-label">[ROBOTICS]</span>
							<p>Building things - from circuits to 3D prints to code. I find it extremely satisfying to turn ideas into tangible projects.</p>
						</div>
						<div className="about-attribute-item">
							<span className="attribute-label">[CREATIVE]</span>
							<p>Outside of tech, I like to sew clothes, play guitar, get outdoors, and travel when I have the chance.</p>
						</div>
						<div className="about-attribute-item">
							<span className="attribute-label">[MEDIA]</span>
							<p>I spend a lot of time with photography and reading. I think both are about paying attention - slowing down and examining things closely.</p>
						</div>
						<div className="about-attribute-item">
							<span className="attribute-label">[SYSADMIN]</span>
							<p>I enjoy experimenting with something new on my home server. This site actually runs on that server.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Companion Section - Tana */}
			<section className="about-module">
				<div className="module-header">
					<div className="module-title">
						<span className="module-icon">◇</span> USER_COMPANION
					</div>
				</div>
				<div className="module-content">
					<p className="module-description">Tana is my adventure buddy and all-around good dog. Whether we’re hiking, playing fetch, or just hanging out, she makes life better.</p>
					<div className="about-companion-gallery">
						<div className="about-companion-card">
							<img src={require('./img/yellow_dither_tana.png')} alt="Tana" className="about-companion-photo" />
						</div>
						<div className="about-companion-card">
							<img src={require('./img/yellow_dither_tana1.png')} alt="Tana" className="about-companion-photo" />
						</div>
					</div>
				</div>
			</section>

			{/* Footer Section - Lambda Logo */}
			<section className="about-module about-footer-module">
				<div className="about-footer-content">
					<img src={require('./img/Lambda-no-background.png')} alt="Lambda School Logo" className="about-lambda-logo" />
					<div className="about-footer-text">
						<p>Built and deployed from my home server.</p>
						<p className="footer-timestamp">{`> system_uptime: too_long`}</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
