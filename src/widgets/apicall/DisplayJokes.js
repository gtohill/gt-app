import React from "react";

function DisplayJokes(props) {
  
  let jokes = props.jokes;

  return (
    <React.Fragment>
      {jokes.map( joke => (
        <div className="joke-box" key={joke.id}>
          <h6 className="setup">{joke.setup}</h6>
          <h5 className="punchline">{joke.punchline}</h5>
        </div>
      
    ))}
    </React.Fragment>
  );
}

export default DisplayJokes;
