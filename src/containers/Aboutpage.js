import React from 'react';
import divline from '../assests/images/divline.png'
import Reveal from 'react-reveal/Reveal';

function AboutPage(props) {

    return(
        
          <div class='about'>
              <div class='block'>
                  <h2>OUR VISION</h2>
                  <div class='dash'></div>
                  <Reveal bottom>
                  <p>“VVCE shall be a leading Institution in engineering and management education enabling individuals for significant contribution to the society”
                  
</p>
</Reveal>
<h2>OUR MISSION</h2>
<div class='dash'></div>
<Reveal bottom>
<p>To provide the best teaching – learning environment through competent staff and excellent infrastructure.
To inculcate professional ethics, leadership qualities, communication and entrepreneurial skills to meet the societal needs
To promote innovation through research and development.
 To strengthen industry-institute interaction for knowledge sharing</p>
 </Reveal>
<h2>CORE VALUES</h2>
<div class='dash'></div>
<Reveal bottom >
<h3>Integrity</h3>
<p>We adopt truthfulness, fairness and transparency in conducting our academic,administrative and professional activities as a means for achieving holistic development.</p>
<h3>Excellence</h3>
<p>We strive to achieve academic excellence by meticulously setting suitable standards for the recruitment of our faculty members, performance of our students and faculty members.</p>
<h3>Team Work</h3>
<p>We encourage teamwork environment where each member of the institution can contribute by offering valuable suggestions for the overall improvement.</p>
<h3>Professionalism</h3>
<p>We provide quality education in different domains of Engineering and Management by means of nurturing the competencies of our students and faculty members. The member’s exhibit pride in upholding commitment, professional code of conduct and ethical values that set benchmarks for professional excellence.</p>
<h3>Research and Collaboration</h3>
<p>We provide a conducive environment that provides opportunities for the students and faculty members to contribute towards the continuous improvement in teaching- learning, research and innovation in collaboration with one another within and outside the institute including industry.</p>
</Reveal>
<img class='divline-img'src={divline} alt=''/>

              </div>
              
          </div>
        
         
    );

}

export default AboutPage;