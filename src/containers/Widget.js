import React from 'react';


function Widget(){
    return(
        <div className="container pt-5">
            <h3 className="text-center">React Widgets</h3>
            <div className="pt-5">
                <h4>To Do App</h4>    
                <div>
                    <p>
                    React app that demonstrates basic CRUD functions in a To Do format
                    </p>
                </div>
            </div>
            <div className="pt-5">
                <h4>API Call</h4>    
                <div>
                    <p>
                    This App makes a GET request using axios async to fetch jokes from https://official-joke-api.appspot.com
                    </p>
                </div>
            </div>
            <div className="pt-5">
                <h4>Use Contect App</h4>    
                <div>
                    <p>
                    App that implements React Hooks useContext api to pass props to a child component deep within the component tree
                    </p>
                </div>
            </div>
            <div className="py-5">
                <h4>Rate Shopper </h4>    
                <div>
                    <p>
                    Rate Shopper app takes a input a dollar amount to invest and the term, then selects the best rate of return from the table of offers. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Widget;