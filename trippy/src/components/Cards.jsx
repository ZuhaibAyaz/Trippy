import React from "react";



function Cards(props) {
  return (
    
      <div class="card-container">
        <div class="image-container">
          <img className="card-image" src={props.image} />
        </div>

        
          <div className="card-title">{props.title}</div>
          <div className="card-desc">{props.desc}</div>
        </div>
     
   
  );
}

export default Cards;
