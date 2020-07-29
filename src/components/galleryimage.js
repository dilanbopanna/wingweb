import React, {Component} from 'react';

class Galleryimage extends React.Component {
render() {
  return(
    
    <div class="container">
  
    <div class="content">
      
        <div class="content-overlay"></div>
        <img class="content-image" src={this.props.image} />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">{this.props.title}</h3>
  <p class="content-text">{this.props.desc}</p>
        </div>
                      </div>
                      </div>
        )
}
}

export default Galleryimage;