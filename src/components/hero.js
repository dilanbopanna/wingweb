import React from 'react';
import Support from '../assests/images/Support.png'
import Growth from '../assests/images/Growth.png'
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce';

import Contact from '../components/hero'



const Hero = () => {
    return (
<div class='hero'>
<div class='tag-block'>
    
    <div>
    
    <div class="wifi-symbol">
  <div class="wifi-circle first"></div>
  <div class="wifi-circle second"></div>
  <div class="wifi-circle third"></div>	
  
</div>


    </div>
    
    
<h5>W<span class='wing-i'>I</span>NG</h5>

</div>
<Reveal cascade>
<h2>W<span>ireless</span> i<span>nter</span> N<span>etworking</span> G<span>roup</span></h2>
</Reveal>
<Reveal left cascade>
<div class="row">

  <div class="column" >
      
  <p class='header-title'>
                        WING
                        </p>
                      
                        <div class='dash'></div>
                        <p class='header-subtitle'>
                        Open Source Community
                </p>
                <p class='header-text'>
                Wireless Inter Networking Group(WING) at VVCE, Mysuru is a community where people work for the uplift of research in the area of networking. WING mainly focuses on Computer Networks, Network Security, Protocol Design and Implementation, Internet of Things, and Cloud Computing.
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScuDy-krnNPi6REIXtaC7_c7r23F5BZ10w5OJeMHuAAKwVgJg/viewform" target="_blank"class='member-btn'>Join Us</a>
        
               
  </div>
 
  <div class="column" >
  <img class='com-img'src={Support} alt='Support'/>
  </div>
</div>
</Reveal>

<div class="row1">
  <div class="column" style={{float:'left'},{marginLeft:'0'},{paddingLeft:'0'}} >
  <img class='gro-img'src={Growth} alt='Community'/>
        </div>
  </div>
  <div class="column" style={{float:'right'},{paddingTop:'13%'}}>
  <p class='header-title'>
                        Goals
                        </p>
                        <div class='dash'></div>
                        <p class='header-text'>
                        The VVCE-WING has the objective to pursue research topics in the broad area of computer communications and networks. We are interested in theoretical and experimental research that leads to the understanding of the impact and future of communications networks. To provide a platform for industry-academia collaboration on multidisciplinary research To provide a wide platform for the researchers to carry out their research work. To provide consultancy services for the researchers who are interested in networking.
                        </p>
  </div>
 
</div>


    );
}
export default Hero;