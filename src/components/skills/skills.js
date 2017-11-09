import React from 'react';
import './skills.css';
// import aframe from '../images/aframe.png';
// import es6 from '../images/es6.png';
// import express from '../images/expressjs.png';
// import html from '../images/html5.png';
// import rechart from '../images/Logomakr_07HQGI.png';
// import css from '../images/MCSS3.png';
// import mui from '../images/mui.png';
// import node from '../images/nodejs.svg';
// import post from '../images/postgres.png';
// import reacta from '../images/react.png';
// import redux from '../images/redux';
// import rest from '../images/REST-API.png';


var Skills = () => {
        return(
            <div className="skillslist">
                <div className="topbox">
                <div className="image">
                    {/* <img src={reacta}/> */}
                    React</div>
                <div className="image">
                    {/* <img src={redux}/> */}
                    Redux</div>
                <div className="image">
                    {/* <img src={es6}/> */}
                    ES6</div>
                <div className="image">
                    {/* <img src={rest}/> */}
                    REST API</div>
                <div className="image">
                    {/* <img src={html}/> */}
                    HTML5</div>
                <div className="image">
                    {/* <img src={css}/> */}
                    CSS3</div>
                </div>
                <div className="bottombox">
                <div className="image">
                    {/* <img src={node}/> */}
                    NodeJS</div>
                <div className="image">
                    {/* <img src={express}/> */}
                    Express</div>
                <div className="image">
                    Massive</div>
                <div className="image">
                    {/* <img src={post}/> */}
                    PostgreSQL</div>
                <div className="image">
                    {/* <img src={rechart}/> */}
                    Recharts</div>
                <div className="image">
                    {/* <img src={mui}/> */}
                    Material-UI</div>
                {/* <div className="image"><img src={aframe}/>A-Frame</div> */}
                </div>
            </div>
        )
    }

export default Skills;