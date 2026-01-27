import './output.css';
import './static/App.css';
import resume from './static/jay_knight_resume.pdf';


function Work() {

  return (
     <div className="bg-gray-950 py-10 min-h-screen">
      {/* Resume Container */}
      <div className=" bg-gray-950 p-8 rounded-2xl shadow-lg w-full mx-auto crt-text">

        {/* Header Card */}
        <section className="resume-header">
          <div className="resume-header-content">
            <img src={require('./img/Lambda-no-background.png')} alt="Lambda School Logo" className="headshot-photo rounded-lg shadow-md object-cover" />
            <div className="resume-header-text">
              <h1>jay knight</h1>
              <p>Computer Science & Robotics Student</p>
              <div style={{marginTop: '1rem'}}>
                <a href="https://github.com/jrkre" target="_blank" rel="noopener noreferrer">
                  → github.com/jrkre
                </a>
                <br />
                <a href={require("./static/Knight, Jay - resume web.pdf")} download>
                  → Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2>Education</h2>
          <h3>University of Nevada, Reno</h3>
          <ul>
            <li>B.S. Computer Science and Engineering, Minor in Mathematics</li>
          </ul>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skills-category">
              <div className="skills-category-label">Languages & Frameworks</div>
              <div className="skills-tags">
                <span className="skill-tag">C/C++</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">ROS/ROS2</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">.NET Core</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">NodeJS</span>
                <span className="skill-tag">Haskell</span>
                <span className="skill-tag">Bash</span>
                <span className="skill-tag">MacOS</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Windows</span>
              </div>
            </div>

            <div className="skills-category">
              <div className="skills-category-label">Tools & Technologies</div>
              <div className="skills-tags">
                <span className="skill-tag">Research</span>
                <span className="skill-tag">SysAdmin</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Web Dev</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Azure Deployments</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Blender</span>
                <span className="skill-tag">AutoCAD</span>
              </div>
            </div>

            <div className="skills-category">
              <div className="skills-category-label">Other Competencies</div>
              <div className="skills-tags">
                <span className="skill-tag">Embedded Systems Design</span>
                <span className="skill-tag">Project Management</span>
                <span className="skill-tag">Technical Writing</span>
                <span className="skill-tag">Presentation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2>Experience</h2>
          <h3>Undergraduate Researcher - UNR SARG <span className="text-gray-400 text-sm">(Aug 2023 - Present)</span></h3>
          <ul>
            <li><p>Made significant contributions to the AI Institute for Exceptional Education and personalized learning.</p></li>
            <li><p>Designed study and software solution for customizable robot faces for children.</p></li>
            <li><p>Implemented a student-learning platform for educational robotics simulations. The platform integrates AI tools to study adaptive learning.</p></li>
            <li><p>Implemented low-level drivers for low-cost educational robotics platforms.</p></li>
          </ul>
          <h3>REU Researcher - UNR SARG <span className="text-gray-400 text-sm">(Jun 2023 - Aug 2023)</span></h3>
          <ul>
            <li><p>Researched architectural solutions for human-robot collaboration.</p></li>
            <li><p>Built an interruption-aware dynamic task tree. Tested on PR2 robot.</p></li>
          </ul>
          <h3>K-12 Robotics Education Assistant - Nevada Robotics @ DRI <span className="text-gray-400 text-sm">(Nov 2021 - Aug 2024)</span></h3>
          <ul>
            <li><p>Managed statewide robotics lending library.</p></li>
            <li><p>Modernized inventory system with barcoding, order tracking, and dynamic reporting to assist in grant writing.</p></li>
            <li><p>Developed and delivered professional development workshops for K-12 educators on robotics integration in the classroom.</p></li>
            <li><p>Created a comprehensive curriculum guide for K-12 robotics education.</p></li>
          </ul>
        </section>

        {/* Publications */}
        <section className="resume-section">
          <h2>Publications</h2>
          <ul>
            <li>
              <span className="font-semibold">Design Activity for Child-Drawn Robot Faces: Evaluating Responses to Child-Drawn Expressive Faces</span>
              <span className="text-gray-400"> — IEEE RO-MAN 2025</span>
              <p>Denielle Oliva, Joshua Knight, Tyler J Becker, Heather Amistani, Monica Nicolescu, David Feil-Seifer</p>
              <p>Abstract: Facial expressiveness plays a crucial role in a robot’s ability to engage and interact with children. Prior research has shown that expressive robots can enhance child engagement during human-robot interactions. However, many robots used in therapy settings feature non-personalized, static faces designed with traditional facial feature considerations, which can limit the depth of interactions and emotional connections. Digital faces offer opportunities for personalization, yet the current landscape of robot face design lacks a dynamic, user-centered approach. Specifically, there is a significant research gap in designing robot faces based on child preferences. Instead, most robots in child-focused therapy spaces are developed from an adult-centric perspective. We present a novel study investigating the influence of child-drawn digital faces in child-robot interactions. This approach focuses on a design activity with children instructed to draw their own custom robot faces. We compare the perceptions of social intelligence (PSI) of two implementations: a generic digital face and a robot face personalized using the user’s drawn robot faces. The results of this study show a significant difference in the PSI of a customized agent compared to a generic face, where a customized agent was rated higher than a non-personalized agent over multiple sub-scales.</p>
            </li>
            <li>
              <span className="font-semibold">Architectural Solution for Tightly-Coupled Robot Collaborative Tasks</span>
              <span className="text-gray-400"> — IROS 2024 (Submitted)</span>
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h2>Projects</h2>
          <ul>
            <li>
              <span className="font-semibold">Bloom</span>
              <div>
                - Full-stack web application for managing social robots in a clinical setting; designed to streamline robot deployment, data collection, and patient growth.
                <br/>
                - Built with React frontend, .NET backend, and Jenkins CI/CD. 
                <br/>
                - Technical lead for Robotics senior capstone project, owned the full lifecycle from requirements elicitation to agile execution and delivery.
              </div>
              <a
              href="https://bloom.nevada.dev/about"
              className="publication-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              → View site
            </a>
            </li>
            <li>
              <span className="font-semibold">'HomeLab'</span>
              <div style={{marginTop: '0.25rem', marginLeft: '0'}}>
                - Remote VM streaming for mobile development/gaming/systems administration.
                <br/>
                - Containers for video streaming, website hosting, load balancing, etc.
              </div>
            </li>
            <li>
              <span className="font-semibold">Robot Restoration</span>
              <p>- Conducted regular maintenance and updates on UNR Robotics center robotic systems.</p>
            </li>
          </ul>
        </section>

        {/* Leadership */}
        <section className="resume-section">
          <h2>Leadership</h2>
          <ul>
            <li>
              <span className="font-semibold">UNR Robotics Club President</span>
              <span className="text-gray-400"> (Dec 2022 - May 2024)</span>
              <br />
              <p>Secured $10k in grants, supported K-12 outreach.</p>
            </li>
            <li>
              <span className="font-semibold">FBLA State Champion - Mobile App Dev</span>
              <span className="text-gray-400"> (May 2018)</span>
              <br />
              <p>Collaborated in a small team to create and pitch a social media garage-sale themed fundraising app.
              Lead the backend development. 
              Implemented a .NET Core 4 REST API with database, file management, and administration/moderation tooling to support the app.
              </p>
            
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default Work;
