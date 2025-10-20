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
          <div className="flex items-center *:justify-center">
            <div className="flex mr-6" style={{textAlign: 'center'}}>
            <img src={require('./img/Lambda-no-background.png')} alt="Lambda School Logo" className="headshot-photo rounded-lg shadow-md object-cover mx-auto mb-2" />
            <div className="flex-col" style={{textAlign: 'justify'}}>
							    <h1 style={{textAlign: 'justify'}}>jay knight</h1>
                  <p style={{textAlign: 'justify'}}>computer science & robotics student</p>
                  <a href="https://github.com/jrkre">github.com/jrkre</a> <br />
                  <a href={resume} download>download resume</a>
						   </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2>Education</h2>
          <h3>University of Nevada, Reno</h3>
          <ul>
            <li>B.S. Computer Science and Engineering, Minor in Mathematics and Robotics</li>
            <li>M.S. Robotics, Focus in Socially Assistive Robotics</li>
          </ul>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <h2>Skills</h2>
          <div>
            <div>
              <span className="font-semibold skills text-gray-400">Languages/Frameworks:</span> MacOS, Linux, Windows | ROS/ROS2, C/C++, Python, .NET Core, NodeJS, Haskell, Bash
            </div>
            <div>
              <span className="font-semibold skills text-gray-400">Tools:</span> AutoCAD, Blender | Research, Web Dev, Azure Deployments, SysAdmin, Git
            </div>
            <div>
              <span className="font-semibold skills text-gray-400">Other:</span> Embedded Systems Design, Project Management, Technical Writing, Presentations
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
              <span className="font-semibold">'HomeLab'</span> 
              <p>- Remote VM streaming for mobile development/gaming/systems administration.</p>
              <p>- Containers for video streaming, website hosting, load balancing, etc.</p>
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
