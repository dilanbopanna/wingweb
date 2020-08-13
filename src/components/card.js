import React from 'react'
import gururaj from '../assests/images/gururaj.jpeg'
import aishwarya from '../assests/images/aishwarya.jpeg'
import anjali from '../assests/images/anjali.jpeg'
import anusha_k from '../assests/images/anusha_k.jpeg'
import chetan from '../assests/images/chetan.jpeg'
import chetana from '../assests/images/chetana.jpeg'
import gagana_s from '../assests/images/gagana_s.jpeg'
import gouthamb from '../assests/images/gouthamb.jpeg'
import hamsaveni from '../assests/images/hamsaveni.jpeg'
import harshitha_k from '../assests/images/harshitha_k.jpeg'
import janhavi from '../assests/images/janhavi.jpeg'
import megha_v from '../assests/images/megha_v.jpeg'
import poornima from '../assests/images/poornima.jpeg'
import poornima_t from '../assests/images/poornima_t.jpeg'
import praveen from '../assests/images/praveen.jpeg'
import pushkin from '../assests/images/pushkin.jpeg'
import shashank from '../assests/images/shashank.jpeg'
import swathi_bh from '../assests/images/swathi_bh.jpeg'
import trupti from '../assests/images/trupti.jpeg'
import veena from '../assests/images/veena.jpeg'
import shradda from '../assests/images/shradda.jpeg'
import prajwal from '../assests/images/prajwal.jpeg'
import manasvi from '../assests/images/manasvi.jpeg'
import bops from '../assests/images/bops.jpg'

import Cardinfo from '../components/cardinfo'
import Scardinfo from '../components/scardinfo'
import Reveal from 'react-reveal/Reveal';

const Card = (props) => {
    return(
       
        <div class='cards'>
            <Reveal leftReveal>
            <h3>CO-ORDINATORS</h3>
            </Reveal>

            <div class="row2">
  <div class="column2">
  <Cardinfo 
  image={gururaj}
  name='Dr. Gururaj H L'
  about='Associate Professor, Department of Computer Science and Engineering'
  more='https://itsmeguru.in/'
  linkedin='https://www.linkedin.com/in/dr-gururaj-h-l-92513539/'
  facebook='https://www.facebook.com/gururaj.gowda1/'
  />
  </div>

  <div class="column2">
  <Cardinfo 
  image={janhavi}
  name='Prof. Janhavi V'
  about='Associate Professor, Department of Computer Science and Engineering'
  more='https://docs.google.com/a/vvce.ac.in/viewer?a=v&pid=sites&srcid=dnZjZS5hYy5pbnxjb21wdXRlci1zY2llbmNlLWFuZC1lbmdpbmVlcmluZ3xneDozZTg0M2MwNGNkZjI3NmIx'
  linkedin='https://www.linkedin.com/in/janhavi-v-5108131ab/'
  facebook='https://www.facebook.com/janhavi.vishwanath.7'
  />
  </div>
  
  <div class="column2">

  </div>

</div>
<Reveal left>
<h3>ASSOCIATED STAFF</h3>
</Reveal>
<div class='row2'>
    <div class='column2'>
    <Cardinfo 
  image={hamsaveni}
  name='Prof. Hamsaveni M'
  about='Assistant Professor, Department of Computer Science and Engineering'
  more='https://docs.google.com/a/vvce.ac.in/viewer?a=v&pid=sites&srcid=dnZjZS5hYy5pbnxjb21wdXRlci1zY2llbmNlLWFuZC1lbmdpbmVlcmluZ3xneDozYzg3NzUwNWM4ZDk3NTFl'
  linkedin=''
  facebook=''
  />
    </div>
    <div class='column2'>
    <Cardinfo 
  image={poornima}
  name='Prof. Poornima N'
  about='Assistant Professor, Department of Computer Science and Engineering'
  more='https://drive.google.com/file/d/1WjdlHuRrICZQAfTgodtsF0VMnEfXfhc8/view'
  linkedin='https://www.linkedin.com/in/poornima-n-a1b1aa84/'
  facebook='https://www.facebook.com/poorniman.poorni'
  />
</div>
<div class='column2'>
    <Cardinfo 
  image={chetana}
  name='Prof. Chethana H T'
  about='Assistant Professor, Department of Computer Science and Engineering'
  more='https://docs.google.com/a/vvce.ac.in/viewer?a=v&pid=sites&srcid=dnZjZS5hYy5pbnxjb21wdXRlci1zY2llbmNlLWFuZC1lbmdpbmVlcmluZ3xneDozYTcyNmVjMjg0ZjJmYmI1'
  linkedin=''
  facebook=''
  />
    
</div>
</div>
<div class='row2'>
<div class='column2'>
    <Cardinfo 
  image={praveen}
  name='Prof. Praveen K S'
  about='Assistant Professor,Dept of Electronics Communication & Engineering'
  more='https://drive.google.com/file/d/16tElBJf-OYrM50z1F39fkSKPmDIl6d-M/view'
  linkedin='https://www.linkedin.com/in/praveengowdaks/'
  facebook='https://m.facebook.com/Praveen.Ks.Gowda?ref=bookmarks'
  />
</div>
<div class='column2'>
<Cardinfo 
  image={shashank}
  name='Prof. Shashank N'
  about='Assistant Professor, Department of Computer Science and Engineering'
  more='https://drive.google.com/file/d/0B5xUuteK0ddjSmdoTkZBVDlkNGdJS1lCTmNKTC12dE1DMVBz/view'
  linkedin='https://www.linkedin.com/in/shashank-n-74493383/'
  facebook='https://www.facebook.com/shashank.shashu.18'
  />
  </div>
<div class='column2'>

</div>
<div class='column2'>
<Cardinfo 
  image={harshitha_k}
  name='Prof. Harshitha K'
  about='Assistant Professor, Department of Computer Science and Engineering'
  linkedin='https://www.linkedin.com/in/harshitha-k-35571a59'
  facebook=''
  />
  </div>
</div>
<div class='row2'>
    <div class='column2'>
    <Cardinfo 
  image={swathi_bh}
  name='Prof. Swathi B H'
  about='Assistant Professor, Department of Computer Science and Engineering'
  more='https://drive.google.com/file/d/1j9LqeDsmR5laFrwkR9-xgXa9OiedhpH0/view'
  linkedin='https://www.linkedin.com/mwlite/in/swathi-b-h-545173141'
  facebook='https://www.facebook.com/swathi.gowda.3348'
  />
    </div>
    <div class='column2'>
    <Cardinfo 
  image={megha_v}
  name='Prof. Megha V'
  about='Assistant Professor, Department of Computer Science and Engineering'
  more='https://drive.google.com/file/d/1aN62rGs0CKVRfpd5MmWxFYqOX6FMf78-/view'
  linkedin='https://www.linkedin.com/in/megha-v-b61b3b150'
  facebook='https://www.facebook.com/megha.suresh.56808'
  />
</div>
<div class='column2'>
<Cardinfo 
  image={anusha_k}
  name='Prof. Anusha K S'
  about='Assistant Professor, Department of Computer Science and Engineering'
  more='https://drive.google.com/file/d/1C2bddI1wcJ_pjT13aPbbXr_6ct2xHTwW/view'
  linkedin=''
  facebook=''
  />
</div>
    
</div>
<div class='row2'>
    <div class='column2'>
    <Cardinfo 
  image={aishwarya}
  name='Prof. Aishwarya T'
  about='Assistant Professor, Department of Computer Science and Engineering'
  more='https://drive.google.com/file/d/1xMczLnBHkL6C2zKA3rMV6I0nei4BLVsY/view'
  linkedin='https://www.linkedin.com/in/aishwarya-t-64556417b'
  facebook='https://www.facebook.com/aish.9528'
  />
    </div>
    <div class='column2'>
    <Cardinfo 
  image={gagana_s}
  name='Prof. Gagana S'
  about='Assistant Professor, Department of Computer Science and Engineering'
  linkedin='https://www.linkedin.com/in/gagana-s-79596a130'
  facebook=''
  />
</div>
<div class='column2'>
<Cardinfo 
  image={gouthamb}
  name='Prof. Goutham B'
  about='Assistant Professor, Department of  Electrical and Electronics Engineering'
  linkedin='https://www.linkedin.com/in/goutham-b-6385631a2'
  facebook='https://www.facebook.com/goutham.921'
  />
</div>

</div>
<div class='row2'>
<div class='column2'>
<Cardinfo 
  image={pushkin}
  name='Pushkin K M'
  about='Instructor, Department of Computer Science and Engineering'
  linkedin='https://www.linkedin.com/in/pushkin-k-m-b6490743'
  facebook='https://www.facebook.com/pushkin.km'
  />
</div>
<div class='column2'>
<Cardinfo 
  image={poornima_t}
  name='Poornima T'
  about='Assistant Professor, Department of Computer Science and Engineering'
  linkedin=''
  facebook=''
  />
</div>


</div>

<Reveal left>
<h3>STUDENT EXECUTIVE</h3>
</Reveal>
<div class='row2'>
    <div class='column2'>
    <Scardinfo 
  image={manasvi}
  name='Manasvi J Maasthi'
  about='General Secretary, Department of Computer Science and Engineering'
  linkedin='https://www.linkedin.com/in/manasvi-j-maasthi-282994199/'
  facebook='https://www.facebook.com/manasvi.jmaasthi.3'
  />
    </div>
    <div class='column2'>
    <Scardinfo 
  image={prajwal}
  name='Prajwal Hebbar A S'
  about='External Affairs, Department of Computer Science and Engineering'
  linkedin='https://www.linkedin.com/in/prajwal-hebbar-7740531a2/'
  facebook='https://www.facebook.com/prajwal.hebbar.7'
  />
</div>
<div class='column2'>
<Scardinfo 
  image={trupti}
  name='Trupthi Raghu'
  about='Sponsorship Co-Ordinator, Department of Computer Science and Engineering'
  linkedin='https://www.linkedin.com/in/trupthi-raghu-143111178/'
  facebook='https://www.facebook.com/trupthi.raghu'
  />
</div>
    
</div>

<div class='row2'>
    <div class='column2'>
    <Scardinfo 
  image={shradda}
  name='Shraddha'
  about='Membership Co-Ordinator,Department of Computer Science & Engineering'
  linkedin='https://www.linkedin.com/in/shraddha-manjunath-a5572717a/'
  facebook='https://www.facebook.com/shraddha.m.kunchi'
  />
    </div>
    <div class='column2'>
    <Scardinfo 
  image={veena}
  name='Veena H'
  about='Event Co-Ordinator, Department of Computer Science and Engineering'
  linkedin='https://www.linkedin.com/in/veena-h-a7815816b/'
  />
</div>
<div class='column2'>
<Scardinfo 
  image={chetan}
  name='Chetan S S'
  about='Technical Co-Ordinator, Department of Computer Science and Engineering'
  linkedin='https://www.linkedin.com/in/chethan-s-s-gowda2512/'
  facebook='https://www.facebook.com/chethan.ss.chethanchinnu'
  />
</div>
    
</div>
<div class='row2'>
    <div class='column2'>
    <Scardinfo 
  image={anjali}
  name='Anjali M'
  about='Internal Affairs, Department of Computer Science and Engineering'
  linkedin='https://www.linkedin.com/in/anjali-gowda-518106178/'
  facebook='https://www.facebook.com/profile.php?id=100006893350367'
  />
    </div>
    <div class='column2'>
    <Scardinfo 
  image={bops}
  name='Bopanna M J'
  about='Web Designer, Department of Computer Science and Engineering'
  more='https://bopanna.me/'
  linkedin='https://www.linkedin.com/in/bopannamj4a7a7/'
  />
</div>

</div>
        </div>
        
    );
    }
export default Card;