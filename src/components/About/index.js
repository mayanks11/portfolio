import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import "./index.scss";


function About(){
    return(
        <>
        <div className = "container about-page">
            <div className="text-zone">
                <h1>
                    About Me
                </h1>

                <p>I am a third year B.Tech student in CSE Core 
                branch at VIT Bhopal.
                </p>
                <p>I am a full stack web developer, specializing 
                in ReactJs. I am currently working as an intern
                at Delta V Robo as a web developer incorporating 3-D
                models in websites</p>
                <p>I like to play table tennis, read novels, and 
                listen jazz.</p>

            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faGitAlt} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faNodeJs} color="#EC4C28"/>
                    </div>
                </div>
            </div>

        </div>
        
        </>
    )
}

export default About;