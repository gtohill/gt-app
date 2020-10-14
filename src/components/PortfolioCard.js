import React, { useState, useEffect } from "react";

const boxShadow = {
  boxShadow: '5px 5px 10px #a3a3c2, -5px -5px 10px #f0f0f5',
  borderRadius: '15px',
  width: '275px',
};

function PortfolioCard(props) {
  //const [contact, setContact] = useState([]);

  function changeCursor(e) {
    e.target.style.cursor = "pointer";    
  }
  return (
  
    <div style={boxShadow}>
      <a  href={props.data.url} target="_blank" rel="noopener noreferrer">
    <div
      
      style={{ width: "250px", height:"250px", margin:'auto'}}
      onMouseEnter={changeCursor}      
    >
      <img
        className="card-img-top"
        style={{height:"125px"}}
        src={props.data.image_logo}
        alt="Card cap"
      />
      <img
        className="card-img-top"
        style={{height:"125px"}}
        src={props.data.image_hero}
        alt="Card cap"
      />  
       
      
    </div>
    </a>
    </div>
  );
}

export default PortfolioCard;
