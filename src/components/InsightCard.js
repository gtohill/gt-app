import React from "react";


function InsightCard(props) {
  return (
    <div class="card nuemorp-insight-card pt-3" style={{width: "18rem", backgroundColor: '#d6d6f5'}}>
    <h5 class="card-title insight-card-title-color">{props.cardTitle}</h5>
      <img class="card-img-top" src={props.cardImage} alt={props.cardAlt} />
      <div class="card-body">
        <p class="card-text  insight-card-body">
        {props.cardShort}
        </p>
        <div className="card-center-link">
            <a href={props.link} className="btn btn-success text-light">
                Take A Look!
            </a>
        </div>
      </div>
    </div>
  );
}

export default InsightCard;
