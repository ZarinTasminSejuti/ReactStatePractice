import React, {useState} from "react";


function Time(){

    setInterval(updateTime,1000);

    let currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);

    const [time, setTime] = useState(currentTime);

    function updateTime(){

      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);

    }

  
    return (
        <div className="main">
            <h1>{time}</h1>
            <div className="timeButton">
                <button onClick = {updateTime}>Get The Time</button>
            </div>
        </div>
    );
}


export default Time;