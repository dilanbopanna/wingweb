import React from 'react';
import Hero from '../components/hero'
import Contact from '../components/contact'
import Footer from '../components/footer'

function HomePage(props) {

    return(
        <div className = 'about-me'>
   
     <Hero />
     <Contact />
     <Footer />
        </div>     
    );

}

export default HomePage;