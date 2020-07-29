import React from 'react';
import Card from '../components/card'

function TeamPage(props) {

    return(
        <div className = 'team'>
            <div class='about'>
                <div class='block'>
                    <h2>TEAM</h2>
                    <div class='dash'></div>
                    <div class='coordinaters'>
                    
                        <Card/>
                    </div>
                </div>
            </div>
          
        </div>     
    );

}

export default TeamPage;