import React from 'react';
import meet1 from '../assests/images/meet1.jpeg'
import inau from '../assests/images/inau-1.jpg'
import inau3 from '../assests/images/inau-3.jpg'
import inau4 from '../assests/images/inau-4.jpg'
import pspw2 from '../assests/images/pwsw-2.jpg'
import pspw4 from '../assests/images/pwsw-4.jpg'
import day1 from '../assests/images/FDP.1.2.jpeg'
import day12 from '../assests/images/FDP.1.6.jpeg'
import day2 from '../assests/images/FDP.2.3.jpeg'
import day24 from '../assests/images/FDP.2.4.jpeg'
import day3 from '../assests/images/FDP.3.2.jpeg'
import day4 from '../assests/images/FDP.4.2.jpeg'
import day5 from '../assests/images/FDP.5.5.jpeg'
import syn1 from '../assests/images/syn1.jpg'
import syn2 from '../assests/images/syn2.jpg'
import syn3 from '../assests/images/syn3.jpg'

import Galleryimage from '../components/galleryimage'
function GalleryPage(props) {

    return(
        <div className = 'gallery'>
    <div class='about'>
                <div class='block'>
                    <h2>GALLERY</h2>
                    <div class='dash'></div>
                <div class='row2'>
                    <div class='column2'>
                   <Galleryimage
                   image={meet1}
                   title='First Meeting'
                   desc=''
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={inau}
                   title='Wing Inauguration'
                   desc=''
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={inau4}
                   title='Wing Inauguration'
                   desc=''
                   />
                    </div>
                </div>
                <div class='row2'>
                    <div class='column2'>
                   <Galleryimage
                   image={inau3}
                   title='Wing Members'
                   desc=''
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={pspw2}
                   title='Workshop'
                   desc='Paper Writing Skills'
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={pspw4}
                   title='Workshop'
                   desc='Paper Writing Skills'
                   />
                    </div>
                </div>
                <div class='row2'>
                    <div class='column2'>
                   <Galleryimage
                   image={day1}
                   title='Workshop day 1'
                   desc='Faculty Development Program on 5G Networks & Research Challenges in Networking'
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={day12}
                   title='Workshop day 1'
                   desc='Faculty Development Program on 5G Networks & Research Challenges in Networking'
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={day24}
                   title='Workshop day2'
                   desc='Faculty Development Program on 5G Networks & Research Challenges in Networking'
                   />
                    </div>
                </div>
                <div class='row2'>
                    <div class='column2'>
                   <Galleryimage
                   image={day24}
                   title='Workshop day 2'
                   desc='Faculty Development Program on 5G Networks & Research Challenges in Networking'
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={day3}
                   title='Workshop day 3'
                   desc='Faculty Development Program on 5G Networks & Research Challenges in Networking'
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={day4}
                   title='Workshop day 4'
                   desc='Faculty Development Program on 5G Networks & Research Challenges in Networking'
                   />
                    </div>
                </div>
                <div class='row2'>
                    <div class='column2'>
                   <Galleryimage
                   image={day5}
                   title='Workshop day 5'
                   desc='Faculty Development Program on 5G Networks & Research Challenges in Networking'
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={syn1}
                   title='Symposium on Networking'
                   desc=''
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={syn2}
                   title='Symposium on Networking'
                   desc=''
                   />
                    </div>
                </div>
                <div class='row2'>
                    <div class='column2'>
                   <Galleryimage
                   image={syn3}
                   title='Symposium on Networking'
                   desc=''
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={syn1}
                   title='Symposium on Networking'
                   desc=''
                   />
                    </div>
                    <div class='column2'>
                    <Galleryimage
                   image={syn2}
                   title='Symposium on Networking'
                   desc=''
                   />
                    </div>
                </div>
                    </div>
                </div>
        </div>     
    );

}

export default GalleryPage;