import React, {Component} from 'react';

class Scardinfo extends React.Component {
render() {
  return(
    <div class="card">
     
    <div class="cover" style={{width:'auto'},{height:'100px'}}></div>
   <div class='hey'>
       <img src={this.props.image} class='profile-pic'></img>
   </div>
   <div class='content2'>
  <h2>{this.props.name}</h2>
   <p>{this.props.about}</p>
   <div class='media1'>
   <a href={this.props.linkedin} target='_blank' class='linkdin'><i class="fa fa-linkedin" aria-hidden="true"/></a>
   <a href={this.props.facebook} target='_blank' class='face-book'><i class="fa fa-facebook" aria-hidden="true"/></a>    
   </div>
   </div>
   
  </div>
        )
}
}

export default Scardinfo;