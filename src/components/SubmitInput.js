import React, { useState } from 'react';

function SubmitInput(props) {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  return (
    <input className={props.data.style} type={props.data.type} value={props.data.value} />
  );
}

export default SubmitInput;