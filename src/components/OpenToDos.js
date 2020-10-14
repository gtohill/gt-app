import React from 'react';


function OpenToDos(props){
    const currentItems = props.todos;
    const toDoItems = currentItems.map( (todo, index) => {
     return (
       <div className="open-todos" key={index}>
        <input className="todo-check-box" name={index} type="checkbox" checked="" onChange={props.onchange} /><span>{todo}</span>
       </div>       
       );
    });
    return(
        <React.Fragment>
            <h4>To Do's</h4>
            <form>
                {toDoItems}                              
            </form>    
        </React.Fragment>
    )

}

export default OpenToDos;