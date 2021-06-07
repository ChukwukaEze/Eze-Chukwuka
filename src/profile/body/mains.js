import React from 'react'
import DisplayPicture from '../../images/eze-chukwuka.jpg'
import {FiDownloadCloud, FiArrowLeft, FiGithub, FiLinkedin, FiTwitter} from 'react-icons/fi'



function Main(props) {
    return (
        <main className="main">
            <div className="base_footer">
            </div>
            <div className="main_body">
                <div className="intro">
                    <img src={DisplayPicture} alt="" className="display_picture" />
                    <div className="name_title">
                        <h3>Eze Chukwuka</h3>
                        <p>Software Engineer</p>
                    </div>
                    <div className="nav">
                        <div className="onsocials">
                            <a href="https://drive.google.com/file/d/1rAV5UAAiM8r5lgmsYJjm2wWRH3QmWS-2/view?usp=sharing" target="_blank">
                                <FiDownloadCloud/>
                            </a>
                            <a href="https://github.com/ChukkyWang" target="_blank">
                                <FiGithub/>
                            </a>
                            <a href="https://twitter.com/TheChukkyEze" target="_blank">
                                <FiTwitter/>
                            </a>
                            <a href="https://www.linkedin.com/in/eze-chukwuka" target="_blank">
                                <FiLinkedin/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="for_the_web">
                    <h2>
                        Connecting with Codes.
                    </h2>
                    <div className="welcome_note">
                        <article>
                            <p>Hi 👋, my name is Eze Chukwuka,</p>
                            <p>I am a Software Engineer particular about building deeply interactive web applications that help brands connect meaningfully with their respective communities.</p>
                            
                        </article>
                    </div>
                    <div className="buttons">
                        <button onClick={() => props.nowOpen()}>My Projects</button>
                        <button disabled>Non Developer</button>
                    </div>
                    
                </div>
            </div>
            
        </main>
    )
}

export default Main
