import React from "react";
import "./Resume.css";
import { Link } from "react-router-dom";

const Resume = () => {
  const experience = [
    {
      company: "Yerhma co-creation hub || Shoppeet",
      position: "Web Developer [Contract]",
      started: "June 2023",
      ended: "October 2023",
      description:
        "I worked with the Shoppeet product team in building an intuitive admin dashboard with diverse functionalities to streamline data-management, optimize user experience, and facilitate efficient decision-making for administrators overseeing the platform.",
      achievements: [
        "Crafted a component libraries from scratch using Sass, React JS and react-bootstrap to ensure consistency.",
        "Engineered state management with Redux toolkit and Hooks.",
        "Pulled data from the blockchain in real time to display live statistics and token prices.",
        "Visualized user, products and sales data using charting libraries and custom paginated tables.",
        "Maintained a well structured codebase.",
        "Implemented api request caching on the server to save resources, improve performance and generally reduce load on the backend.",
      ],
    },
    {
      company: "PlayPick",
      position: "Frontend Engineer [Contract]",
      started: "May 2024",
      ended: null,
      description:
        "I Joined the PlayPick engineering team in building an football fantasy platform.",
      achievements: [
        "Built complex layouts and components with Chakra & Shndn UI",
        "Used Next Js to deliver optimised, pre-rendered pages when necessary.",
        "Managed app state with Zustand",
        "Implented authenication with Next Auth, Zod and React-hook-form",
      ],
    },
    {
      company: "Faraday Africa",
      position: "Frontend Developer [Intern]",
      started: "May 2023",
      ended: null,
      description:
        "I worked with the faraday product team to build a web application for a edu-tech startup",
      achievements: [
        "Transformed existing codebase of internal link shortener written with vanilla JS to React code structure",
        "Ensured seamless user experience by Implementing easy navigation for efficient link management.",
        "Applied responsive design principles for multi-device usability.",
      ],
    },
    {
      company: "Genesys Tech Hub",
      position: "Frontend Developer [Intern]",
      started: "November 2022",
      ended: "June 2023",
      description:
        "I contributed in developing user interfaces for quite a number of products within 6 months while learning new skills",
      achievements: [
        "Worked with my team in presenting an NFT ticketing system (ticket3) that revolutionizes the way events are experienced by creating an entirely new dimension in the ticketing process",
        "Built with my team a Payroll system that serves as a digital solution to tackle the problem organizations face considering automating salaries and compensation based on employee performance in collaboration with their human resource management system (web3 included).",
        "Contributed to team sprint planning and project meetings and achieved development milestones and scheduled targets using tools like Agile, Scrum, solidity, MetaMask, reactjs and tailwindcss."
      ],
    },
   
  ];

  return (
    <div className="resume">
      <div className="resume_container">
        <div className="top_row">
          <h2>Samuel Chukwuma</h2>
          <div className="buttons">
            <a
              href="https://linkedin.com/in/samuel-chukwuma-5a429822a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>
                <i className="fab fa-linkedin"></i> <span>Linked In</span>
              </small>
            </a>
            <a
              href="/samuel-chukwuma-resume.pdf"
              download="samuel-chukwuma-resume.pdf"
            >
              <small>
                <i className="fas fa-download"></i> <span>Download Resume</span>
              </small>
            </a>
          </div>
        </div>

        <p className="subheading">Frontend Developer</p>

        <div className="summary">
          <p>
            I’m a frontend software developer, passionate about solving problems
            with code and transforming ideas from pixels to scalable products. I
            create usable applications with user experience as a top priority
            using various web tools, languages and technology.
          </p>
        </div>

        <div className="divider">
          <p>Core Technologies</p>
          <span></span>
        </div>

        <div className="skills">
          <p>
            HTML/CSS/SASS, Javascript [ES6+], React JS, Next JS, CSS-in-JS,
            Typescript, Redux toolkit, Zustand, React Query, Chakra UI, Styled component, Tailwind
            CSS.
          </p>
        </div>

        <div className="divider">
          <p>Familiar With</p>
          <span></span>
        </div>

        <div className="skills">
          <p>
            Node JS, Express, MongoDB, Unit Testing, Web Sockets, PWAs, SEO, Intro
            knowledge on Blockchain Technologies like: Ethereum, Smart Contracts, Web3.js, Hardhat, Solana and Anchor
            etc
          </p>
        </div>

        <div className="divider">
          <p>On The Job</p>
          <span></span>
        </div>

        <div className="skills">
          <p>Agile/Scrum, Version Control, Best Practices, CI/CD</p>
        </div>

        <div className="divider">
          <p>Work Experience</p>
          <span></span>
        </div>

        <div className="exp_container">
          {experience.map((exp, index) => (
            <section className="experience" key={index}>
              <p className="title">
                {exp.company} - <i>{exp.position}</i>
                <span>
                  <br /> {exp.started.toUpperCase()} -{" "}
                  {exp.ended === null ? "PRESENT" : exp.ended.toUpperCase()}
                </span>
              </p>

              <article className="description">
                <p> {exp.description} </p>
                {exp.achievements.map((achievement, index) => (
                  <p key={index}>
                    <span>■</span> {achievement}
                  </p>
                ))}
              </article>
            </section>
          ))}
        </div>

        {/* <div className="divider">
          <p>Education</p>
          <span></span>
        </div> */}

        {/* <div className="exp_container">
          <section className="experience">
            <p className="title">
              Federal University Of Petroleum Resources Effurun — B.Eng, Marine
              Engineering
              <span>
                <br /> 2017-2022
              </span>
            </p>
          </section>
        </div> */}

        <div className="divider">
          <p>Projects</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p className="nospan">
                Links to my works can be found on{" "}
                <Link to="/projects">here</Link> and more details can be
                provided upon request.
              </p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
