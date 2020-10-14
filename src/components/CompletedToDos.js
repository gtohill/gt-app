import React from 'react';


function CompletedToDos(props){
    let compTasks = props.completedtasks;
    if(compTasks.length > 0){        
            compTasks = compTasks.map( (task, index) =>{
                return (        
                  <div key={index} style={{backgroundColor: "#5A18C9"}}>{task}</div>
                );
              });
    }else{
        compTasks = []
    }

    return(
        <React.Fragment>
        
        <h4 style={{color: "#190934"}}>Completed Tasks</h4>
        {compTasks}    

        </React.Fragment>
    )
}

export default CompletedToDos;