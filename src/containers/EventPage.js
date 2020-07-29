import React from 'react';
import divline from '../assests/images/divline.png'
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce';

function EventPage(props) {

    return(
        <div className = 'event'>
            <div class='about'>
                <div class='block'>
                    <h2>UPCOMING EVENTS</h2>
                    <div class='dash'></div>
                    <br />
                    <img class='divline-img'src={divline} alt=''/>
                    <h2>COMPLETED EVENTS</h2>
                    <div class='dash'></div>
                    <br/>
                    <Reveal left cascade>
                    <h4>WING Inauguration</h4>
                    <p>Wednesday, 4th October, at 09:30</p>
                    <br />
                    <h4>Paper Writing Skills</h4>
                    <p>Friday, 13th October, at 14:00</p>
                    <br/>
                    <h4>Faculty Development Program on 5G Networks and Research Challenges in Networking</h4>
                    <p>Monday, 15th January till Friday, 19th January 2018 <a href='https://drive.google.com/drive/folders/1xg23kJ_zaSPXIqqGaPhdpmGtGMKK79zY' target='_blank' >For more info</a></p>
                    <br/>
                    <h4>National Symposium on Networking(SoN)</h4>
                    <p>Monday, 30th April, at 09:30
                        
                    </p>

                    <br/>
                    <h4>Paper Writing Skills Workshop</h4>
                    <p>Saturday, 15th September</p>
                    <br/>
                    <h4>Industrial visit to MCF-ISRO,Hassan</h4>
                    <p>2nd October 2018</p>
                    <br/>
                    <h4>Faculty Development Program on Cyber Security, Network Simulators and Research Challenges in Networking"</h4>
                    <p>from 15th to 19th January 2019</p>
                    <br/>
                    <h4>WiNG Day</h4>
                    <p>May 14th ,2019</p>
                    <br/>
                    <h4>One day paper writing skills</h4>
                    <p>September 7th, 2019</p>
                    </Reveal>
                    <br/>
                    <img class='divline-img'src={divline} alt=''/>

                </div>
            </div>
          
        </div>     
    );

}

export default EventPage;