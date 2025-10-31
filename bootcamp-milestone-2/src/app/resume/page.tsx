import Link from "next/link";
import Image from "next/image";

export default function Resume() {
  return (
    <main>
    <div>
    <h1 className= "page-title>"> </h1>
    <Link href="/resume.pdf" download="Caleb_Resume.pdf" className="download-button">
        <Image
          src="/images/cloud-download.png"
          alt="cloud download icon"
          width={20}
          height={20}
        />
        <span>Download Resume</span>
      </Link>

    <div className = "resume" >
        <section className="section">
        <h1 className="resume-section-title">Education</h1>
        <div className="entry">
            <h2 className="entry-title">
                California Polytechnic State University, San Luis Obispo
            </h2>
            <p className="entry-info">
                Bachelor of Science in Computer Science - Expected June 2028
                <br/>
                GPA: 3.79
                <br/>
                President's Honors List (2024-2025)
            </p>
        </div>
        </section>

        <section className="section">
        <h1 className="resume-section-title">Coursework</h1>
        <ul className="course-list">
            <li>
                <b>CSC 123</b> Introduction to Computing
            </li>
            <li>
                <b>CSC 101</b> Fundamentals of Computer Science
            </li>
            <li>
                <b>CSC 202</b> Data Structures
            </li>
            <li>
                <b>CSC 203</b> Project-Based Object-Oriented Programming and Design
            </li>
        </ul>
        </section>

        <section className="section">
        <h1 className="resume-section-title">Skills</h1>
        <ul className="skill-list">
            <li>
                <b>Languages:</b> Python, Java, JavaScript, HTML, CSS
            </li>
            <li>
                <b>Developer Tools:</b> Git, GitHub, VS Code, IntelliJ, pip
            </li>
            <li>
                <b>Markup/Formats:</b> YAML, XML, Markdown
            </li>
            <li>
                <b>Databases:</b> Neo4j
            </li>
            <li>
                <b>Other:</b> Linux, macOS, Windows; troubleshooting and support; customer service
            </li>

        </ul>
        </section>

        <section className="section">
        <h1 className="resume-section-title">Projects</h1>
        <div className="entry">
            <h2 className="entry-title">
                <b>Global Trade Network Graph (Python)</b>
            </h2>
            <p className="entry-info"></p>
            <p className="entry-desciption">
                Modeled international trade flows with configurable filters; emphasized modular, testable code using custom data structures; collaborated with peers to refine implementation.
            </p>
            <br/>
        </div>
        <div className="entry">
            <h2 className="entry-title"><b>U.S. Earthquake Data Analysis (Python)</b></h2>
            <p className="entry-info"></p>
            <p className="entry-desciption">
                Designed a pipeline to download, process, and analyze government seismic data; produced summary statistics to highlight frequency and intensity trends; wrote unit tests to ensure accuracy and maintainability
            </p>
            <br/>
        </div>
        <div className="entry">
            <h2 className="entry-title"><b>JavaScript Graphics (p5.js)</b></h2>
            <p className="entry-info"></p>
            <p className="entry-desciption">
                Created interactive browser-based animations; practiced event-driven programming and structured front-end code with modular functions and design principles.
            </p>
        </div>
    </section>

    <section className="section">
        <h1 className="resume-section-title">Experience</h1>
        <div className="entry">
            <h2 className="resume-subsection-title">
                Engineer Intern - Microchip Technology Inc.
            </h2>
            <p className="entry-info">
                Microchip Technology Inc., Chandler, AZ (July - Sept 2025)
            </p>
            <p className="entry-desciption"/>
            <ul>
                <li>
                    Developed Python agents to process XML and Neo4j data for integration into Microchip's internal chatbot (local instance of ChatGPT).
                </li>
                <li>
                    Authored documentation and test cases to validate functionality.
                </li>
                <li>
                    Rapidly learned CMSIS, ARM Cortex products, YAML, pip, and Markdown with minimal supervision.
                </li>
            </ul>
        </div>
        <div className="entry">
            <h2 className="resume-subsection-title">
                Back of House Team Member - Chick-fil-A
            </h2>
            <p className="entry-info">
                Chick-fil-A, Chandler, AZ (Summer 2024 & 2025)
            </p>
            <p className="entry-desciption"/>
            <ul>
                <li>
                    Prepared and assembled food orders with high accuracy in a fast-paced environment.
                </li>
                <li>
                    Collaborated with team members to handle peak volumes smoothly.
                </li>
                <li>
                    Earned commendations for dependability and positive attitude.
                </li>
            </ul>
        </div>
        <div className="entry">
            <h2 className="resume-subsection-title">
                Freelance Drone Pilot
            </h2>
            <p className="entry-info">
                2023
            </p>
            <p className="entry-desciption">
            <ul>
                <li>
                    Operated a drone to produce high-quality aerial photos and videos.
                </li>
                <li>
                    Ensured FAA compliance and performed equipment setup and troubleshooting.
                </li>
            </ul>
            </p>
        </div>
    </section>

    <section className="section">
        <h1 className="resume-section-title">Leadership and Service</h1>
        <ul>
            <li>
                <b>Scout Team Player,</b> Cal Poly Women's Basketball (Division I)
            </li>
            <li>
                <b>Robotics Team & Student Mentor,</b> Chandler Preparatory Academy, AZ
            </li>
            <li>
                <b>Youth Group Leadership Team, Pianist, AV Tech, </b>First Baptist Church Chandler, AZ
            </li>
            <li>
                <b>Volunteer Pianist,</b> various Senior Memory Care Centers, AZ
            </li>
            <li>
                <b>Event Food Server & Puppeteers,</b> First Baptist Church Chandler, AZ
            </li>
        </ul>
    </section>

     <section className="section">
        <h1 className="resume-section-title">Awards and Certifications</h1>
        <ul>
            <li>
                President's Honors List, Cal Poly (2024-2025)
            </li>
            <li>
                Emerging Leader Series & Certificate, Cal Poly (2024)
            </li>
            <li>
                FAA Part 107 Commercial Drone Pilot License
            </li>
            <li>
                Sports360AZ All-Academic 1st Team (2023, 2024)
            </li>
            <li>
                National Latin Exam: Perfect Score (2020), Gold (2019, 2018), Bronze (2022, 2021)
            </li>
            <li>
               National Greek Exam: Merit Award (2023, 2024) 
            </li>
            <li>
                Arizona Study Program (Piano): Superior Honors (2020)
            </li>
            <li>
                Most Improved Player, Chandler Prep Varsity Basketball (2023-24)
            </li>
        </ul>
    </section>

    </div>
    
    </div>
    </main>
  );
}