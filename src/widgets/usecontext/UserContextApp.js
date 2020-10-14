import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Event from "./Event";
import { UserContext } from "./UserContext";
import Login from "./Login";

function UserContextApp() {
  const [user, setUser] = useState("");
  const [log, setLog] = useState(false);
  
  function handleSubmit(e){
    console.log("Name: "+e.target.user.value);
    setUser(e.target.user.value);
    setLog(true)  
    e.preventDefault();
  }
  
  function handleChange(e){
    console.log(e.target.value);
  }
  
  function handleLogOut(e){
    console.log("log out");
    setUser("");
    setLog(false)
  }

  return (
    <Router>
      <div className="container pt-5 border border-secondary">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/usecontext">
            Use Context App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsupportedContent"
            aria-controls="navbarsupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/usecontext">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usecontext/login">
                  Login
                </Link>
              </li>             
              <li className="nav-item">
                <Link className="nav-link" to="/usecontext/event">
                  Events
                </Link>
              </li>              
            </ul>
          </div>
        </nav>
       

        {/* A <switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <UserContext.Provider value={user}>
        <div className="container gt-page">

          <Switch>
            <Route exact path="/usecontext">
              <Dashboard user={user} />
            </Route>
            <Route path="/usecontext/login">
              <Login 
              handleChange={handleChange}
              handleSubmit={handleSubmit}              
              handleLogOut={handleLogOut}
              status={log}
              />
            </Route>           
            <Route path="/usecontext/event" component={Event} />
          </Switch>
          </div>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default UserContextApp;
