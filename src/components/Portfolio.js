import React, {Fragment, useState} from 'react'
import { FaLaravel, FaReact } from "react-icons/fa";
import {AiOutlineGithub, AiOutlineLink} from "react-icons/ai";

//Pictures

import JDev from '../images/jd.png';
import TEDxApapa from '../images/tedxapapa.png'
import Chukky from '../images/chukky.png'

function Portfolio() {
    const[devWorks, setDevWork] = useState([
        {
            //Image Properties
            devImg: JDev,
            devAlt: "JD Insurance",

            //Project Details
            project: "JD Insurance",
            projectDes: "JD Insurance is a fun project I built with Laravel. It comes with all functionalities: User Authentication (Create Account, Login, and Dashboard). It also comes with the added feature that calls to an API to verify the Bank Verification Number presented by users.",

            //Links
            git: "",
            siteLink: "http://jd-backend.herokuapp.com/",
            stack: "Laravel",
            stackIMG: <FaLaravel/>
        },

        {
            //Image Properties
            devImg: TEDxApapa,
            devAlt: "TEDxApapa Website",

            //Project Details
            project: "TEDxApapa",
            projectDes: "TEDxApapa is an exciting project I built with React to connect with the trendy TEDx community in Apapa. At the moment, visitors can view previous events implemented with a combination of Nested Routes and ContextAPI for a better and faster User Experience.",

            //Links
            git: "",
            siteLink: "https://tedxapapa.com",
            stack: "React",
            stackIMG: <FaReact/>
        },

        {
            //Image Properties
            devImg: Chukky,
            devAlt: "Personal Website",

            //Project Details
            project: "Eze Chukwuka",
            projectDes: "Eze Chukwuka is personal to me because it will over time tell stories about my journey as a Frontend Engineer, and the rediscovery of my passion as a Python Developer. It was built with React to present a simple overview of my interests, work, and progress.",

            //Links
            git: "",
            siteLink: "",
            stack: "React",
            stackIMG: <FaReact/>
        },
        
    ])

    return (
        <section className="portfolio__projects">
            <h5>- My Projects -</h5>

            {devWorks.map((devWork) => (
                <div key={devWork.project} className="project-tile">
                    <div className="project-tile-header">
                        <h3>{devWork.project}</h3>
                        <p>{devWork.stackIMG}{devWork.stack}</p>
                    </div>
                    <div className="project-tile-image">
                        <img src={devWork.devImg} alt={devWork.devAlt}/>
                    </div>
                    <div className="project-tile-content">
                        <p>{devWork.projectDes}</p>
                    </div>
                    <div className="project-tile-link">
                        <a href={devWork.siteLink}>
                            <AiOutlineLink/>
                            <p>Live Site</p>
                        </a>
                    </div>
                </div>
            ))
            }

            

        </section>
    )
}

export default Portfolio
