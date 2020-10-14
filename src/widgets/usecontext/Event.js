import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserInfo from "./UserInfo";

function Event(props) {
  const user = useContext(UserContext);
  let description = '';
  let nextStep = '';
  if(user){
    description +=   `The user name above (${user}) is passed to this compoment using the useContext React Hook. The useContext hook allows the
    parent component to pass an object to any descendent components that are deeply nested in the component tree.` ;
    nextStep ='If you click the link below UserInfo below, the user name will be made available to the child component UserInfo by the useContext Hook.'
  }else{
    description +=   `If you have not entered your username and clicked the login button, please do so. You will see a different message here.
    That message will explain how the useContext hook allows objects to be passed to child components that are nested deep in the component tree.`    
  }

  return (
    <Router>
      <div className="container pt-5">
        <h4 className="text-center">Events for <b>{user}</b></h4>
        <p>
          {description}
        </p>
        <p>
          {nextStep}
        </p>
        <div>
          <h2>User Info Component</h2>
          <ul>
            <li>
              <Link to={"/event/topic"}>{user} let's click this link to see useContext Hook Pass Your Name To A Child Deeper In the Component Tree.</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path={"/event/topic"}>
              <UserInfo />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Event;
