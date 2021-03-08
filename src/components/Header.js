import React, {Fragment} from 'react'
import EzeChukwuka from '../images/eze-chukwuka.jpg'
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub, AiFillMail, AiOutlinePaperClip} from "react-icons/ai";

function Header() {
    return (
        <div className="header-real-content">
            <img src={EzeChukwuka} alt="Eze Chukwuka"/>
            <h3>Eze Chukwuka "Chukky"</h3>
            <small>Frontend Engineer @getLifeSquare</small>
            <div className="socials">
                <a href="https://www.linkedin.com/in/eze-chukwuka">
                    <AiFillLinkedin/>
                </a>
                <a href="https://twitter.com/TheChukkyEze">
                    <AiOutlineTwitter/>
                </a>
                <a href="https://github.com/ChukkyWang">
                    <AiFillGithub/>
                </a>
                <a href="mailto: ezechukwukwae@gmail.com">
                    <AiFillMail/>
                </a>
                <a href="https://drive.google.com/file/d/1rAV5UAAiM8r5lgmsYJjm2wWRH3QmWS-2/view?usp=sharing">
                    <AiOutlinePaperClip/>
                </a>
            </div>
        </div>
    )
}

export default Header
