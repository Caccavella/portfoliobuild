import React, { Component } from 'react';
import './main.css';
import Skills from '../skills/skills';
import ProgrammingResume from './ProgrammingResume.pdf';
// import About from '../about/about';
import animateScrollTo from 'animated-scroll-to';


const desiredOffset = 1160;
const desiredOffset2 = 2500;
const desiredOffset3 = 1685;
const options = {
    speed: 500,
    minDuration: 250,
    maxDuration: 1500,
    element: window,
    cancelOnUserAction: true
};

class Main extends Component {

    render() {
        return (
            <div className="maincontainer">
                <div className="topimage">
                    <div className="name">
                        <h1>Anthony Caccavella</h1>
                        <h3>Web Developer</h3>
                    </div>
                </div>
                <header className="heading">
                    <div className="headingleft">
                        <nav className="navigation">
                            <button className="projectsbutton" onClick={() => animateScrollTo(desiredOffset, options)}>Projects</button>
                            <button className="projectsbutton" onClick={() => animateScrollTo(desiredOffset3, options)}>Skills</button>
                            <button className="projectsbutton" onClick={() => animateScrollTo(desiredOffset2, options)}>Contact</button>
                        </nav>
                    </div>
                    <div className="headingright">
                        <a href={ProgrammingResume} target="blank">
                            <button className="download">View Full Resume</button>
                        </a>
                    </div>
                </header>
                <div className="about">
                    <div className="picture"></div>
                    <div className="abouttitle">About Me:</div>
                    <div className="aboutparagraph">I'm a builder. Whether I'm working on building a website,
                        a wood table, or finishing a new part of my house, I love the process
                        of creating something new and special. Reach out, let's build something together!
                    </div>
                    <link href="https://fonts.googleapis.com/css?family=Contrail+One" rel="stylesheet" />
                </div>

                <div className="projectscontainer">
                    <h1>Recent Projects:</h1>
                    <div className="project">
                        <a href="http://equitylisa.now.sh" target="blank"><div className="projectimage"></div></a>
                        <h3>Real Estate Agent SPA</h3>
                        <h5>Using primarily React, Node, Redux, and Auth0, I created a page for my relative,
                            who is a Real Estate Agent. The point of the page was to drive contact information
                            to her, so I focused on getting her information in front with easy action calls
                            for prospective clients. </h5>
                        <span>For more details, <a href="https://www.linkedin.com/in/anthonycaccavella/" target="blank">click here</a>.</span>
                    </div>
                    <div className="project">
                        <a href="http://27projectmanagement.com" target="blank"><div className="projectimage2"></div></a>
                        <h3>Enterprise Project Management SaaS</h3>
                        <h5>With a group of 3 others, we built a large scale project management app focused
                            around projects, teams, users, and tasks. We used Auth0, React, Redux,
                            Node, Material-UI, RESTful API, Express, Massive, PostgreSQL, Recharts,
                            as well as a customized node module for our modals.</h5>
                        <span>For more details, <a href="https://www.linkedin.com/in/anthonycaccavella/" target="blank">click here</a>.</span>
                    </div>
                    <div className="project">
                        <a href="http://tepanyaki-eample-dm27.now.sh" target="blank"><div className="projectimage3"></div></a>
                        <h3>Local Restaurant Website Redesign</h3>
                        <h5>Used React to create a new version of a local restaurant's website, focusing on readability
                            and mobile responsive behavior, both of which were important upgrades
                            from the previous website.
                        </h5>
                        <span>For more details, <a href="https://www.linkedin.com/in/anthonycaccavella/" target="blank">click here</a>.</span>
                    </div>
                </div>

                <div className="skills">
                    <div className="skilltitle">Skills: </div>
                    <div className="skill-list">
                        <Skills />
                    </div>
                </div>
                <div className="contact-container">
                    <div className="contactinfo">
                        <h2>Contact Info</h2>
                        <div className="contactdetails">
                            <h4>Call Me:     801-232-6279</h4>
                            <a href="mailto:anthony.caccavella@gmail.com" ><h4>Email Me: anthony.caccavella@gmail.com</h4></a>
                            <h4>Website:   acaccavella.com</h4>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <a href={ProgrammingResume} target="blank">
                        <button className="lowerdownload">View Full Resume</button>
                    </a>
                    <a href="https://www.linkedin.com/in/anthonycaccavella/" target="blank"><button className="social1">LinkedIn</button></a>
                    <a href="https://github.com/Caccavella/" target="blank"><button className="social2">Github</button></a>
                </div>
            </div>
        )
    }
}

export default Main;