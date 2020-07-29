import React from 'react';
import divline from '../assests/images/divline.png'
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce';

function ProjectPage(props) {

    return(
        <div class='project'>
        <div className = 'about'>
          <div class='block'>
              <h2>PROJECTS</h2>
              <div class='dash'></div>
              <Reveal top>
              
              <h5>VVCE Monitoring System</h5>
              <p>Seed funded project “VVCE Monitoring System” from our Institution.</p>
              </Reveal>
              <img class='divline-img'src={divline} alt=''/>
          </div>
        </div>     
        </div>
    );

}

export default ProjectPage;