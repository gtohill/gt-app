import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UserInfo(props) {
  const user = useContext(UserContext);
  return (
    <div>
      <h3> This is the User Info for {user}</h3>
      <p>
        We've used useContext to pass your name from the login page, to the
        events componoment, down to this component. No messy props required.
      </p>
    </div>
  );
}

export default UserInfo;
