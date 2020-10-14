import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  const user = useContext(UserContext);
  let content = "";
  if (user) {
    content += `${user}, Welcome To Your Dashboard`;
  } else {
    content += `Welcome To Your Dashboard`;
  }

  return (
    <React.Fragment>
      <div className="text-center pt-5">
        <h1>{content}</h1>
      </div>
      <div className="row pt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <p>
            The purpose of this is app is demonstrate React Hooks useContext
            hook.
          </p>
          <p>
            The useContext hook is an efficient and clean method of passing an
            object to deeply nested child components.
          </p>
          <p>
            To see useContext hook in action, lets login via the <b>Login</b> link in
            the navigation bar above.
          </p>
          <p>
            The name you enter will be saved to createContext. Doing so will
            make the name available to all children components of this app.
          </p>
          <p>
            After you've logged in, please visit the <b>Events</b> tab for the next
            steps
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
