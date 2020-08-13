import React from 'react'
import Reveal from 'react-reveal/Reveal';
import uscp from '../assests/images/uscp.png'

const Contact = () => {
    return(
        <div class='contact'>
            <div class='dash'></div>
            
            <Reveal top>
            <h2>COLLABORATIONS</h2>
            </Reveal>
            <div class='headline'>
            <h5>WiNG signed a Research Collaboration Agreement with Ubiquitous Computing and Signal Processing(UCSP) Research group of NIE, Mysuru on 12th November 2019
</h5>
<img src={uscp} class='collab-pic'></img>
</div>
<br/>


        <div class='dash'></div>
        <Reveal top>
                <h2>READY TO TALK?</h2>
                </Reveal>
                
                <a href="mailto: wing@vvce.ac.in" class='member-btn'>Let's Talk</a>
                   
        
        </div>
    );
    }
export default Contact;