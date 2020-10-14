import React, {useContext} from "react";
import Event from "./Event";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { UserContext } from './UserContext';

function Login(props) {
  const isLoggedIn = props.status;
  let button;
  const user = useContext(UserContext);

  if (isLoggedIn) {
    button = (
      <div className="text-center pt-5">
        <h2>{user} Logging Out?</h2>
        <button className="btn btn-primary" onClick={props.handleLogOut}>Log Out</button>
        <div>
          <p>
            
            <Link className="nav-link" to="/usecontext/event">
                Alright, {user}! Click here to see React Hooks useContext in action.
            </Link>
            <Route exact path="/usecontext/event">               
            </Route>          
          </p>
        </div>
      </div>
    );
  } else {
    button = (
      <div className="text-center pt-5">
        <h2>Log In With A Username</h2>
        <form onSubmit={props.handleSubmit}>
          <input type="text" name="user" onChange={props.handleChange} /> <br /><br/>
          <input className="btn btn-primary" type="submit" value="Log In" />
        </form>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div>{button}</div>
    </React.Fragment>
  );
}

export default Login;
