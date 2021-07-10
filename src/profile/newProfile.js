import React, { useState } from 'react'
import Contact from './body/contact'
import Main from './body/mains'
import './styles/styles.css'
import {useTransition, animated} from 'react-spring'

function NewProfile() {
    const [isOpen, setIsOpen] = useState(false)
    
    const dashboardtransitions = useTransition(isOpen, {
        from: { opacity: 0, transform: 'translateX(-72%)' },
        enter: { opacity: 1, transform: 'translateX(0%)'},
        leave: { opacity: 0, transform: 'translateX(-72%)'},
        })

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <section className="section">
            <Contact/>

            {/* {
                dashboardtransitions((style, item) => 
                item && <animated.div style={style}> 
                            <Contact handleClick={handleClick}/> 
                        </animated.div>
            )} */}

            
        </section>
    )
}

export default NewProfile
