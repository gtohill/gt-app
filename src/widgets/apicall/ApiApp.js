import React, { useState } from "react";
import DisplayJokes from "./DisplayJokes";
import BannerReact from "../../components/HeroBanner"
import axios from "axios";

require('./assets/css/apicallstyles.css');

function ApiApp() {
  const [jokes, setJokes] = useState([]);
  
  function handleSubmit(e){
    e.preventDefault(); 
    fetchData();
  }

  function fetchData(){
    axios.get(`https://official-joke-api.appspot.com/jokes/ten`).then((res) => {
      setJokes(res.data);
    })
  }
  
 
  return (
    <React.Fragment>
    <BannerReact
    headline = "API Call"
    subline ="This App makes a GET request using axios async to fetch jokes from https://official-joke-api.appspot.com"
    />
      <div className="flex-container">
        <div>
          <form onSubmit={handleSubmit}>
            <label>Click Button And Enjoy Some Jokes!</label>
            <br />            
            <input type="submit" value="Get Some Jokes" />
          </form>
          <DisplayJokes 
          jokes={jokes}
          />    
        </div>        
      </div>
      <div>
          
      </div>
    </React.Fragment>
  );
}

export default ApiApp;
