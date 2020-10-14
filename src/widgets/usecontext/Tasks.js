import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Tasks(props){

    const user = useContext(UserContext);

    return(
        <h4>Tasks for {user}</h4>

    )
}

export default Tasks;