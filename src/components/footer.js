import React from 'react'
import vvce from '../assests/images/vvce.png'

const Footer = () => {
    return(
        <div class='footer'>
        <div class='row'>
            <div class='column'>
            <img class='vvce-img'src={vvce} alt='Community'/>
            <div class='social-links'>
            <span><a href="https://www.instagram.com/vvce_wing/" target='_blank' class='insta'><i class="fa fa-instagram" aria-hidden="true" /></a> </span>
            <span><a href="https://www.facebook.com/vvcewing/" target='_blank' class='face-book'><i class="fa fa-facebook" aria-hidden="true"/></a></span>
            <span><a href="https://twitter.com/vvcewing" target='_blank' class='twitter'><i class="fa fa-twitter" aria-hidden="true"/></a></span>
            <span><a href="https://www.linkedin.com/company/vvcewing/about/" target='_blank' class='linkdin'><i class="fa fa-linkedin" aria-hidden="true"/></a></span>
            </div>
            </div>
            <div class='column'>
            <h3>Dept of Computer Science and Engineering</h3>
<h4>VIDYAVARDHAKA COLLEGE OF ENGINEERING</h4>
<p>P.B. No.206, Gokulam III Stage,<br/>
Mysore - 570 002, Karnataka, INDIA.<br/>
wing@vvce.ac.in</p>

            </div>
         
  
</div>
</div>
    );
    }
export default Footer;