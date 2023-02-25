import React, {useState} from "react";

function Button(){
    const [count, setCount] = useState(0);

  function increase(){
    setCount(count + 1);
  }

  function Decrease(){
    setCount(count - 1);
  }

    return (
        <div className="main">
            <h1>{count}</h1>
            <div className="Button">
                <button onClick = {increase}>+</button>
                <br />
                <button onClick = {Decrease}>-</button>
            </div>
        </div>
    );
}


export default Button;