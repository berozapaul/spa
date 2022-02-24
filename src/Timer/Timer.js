import React, {useState, useEffect} from 'react';
import './timer.css'
/*
 * Purpose: The purpose of this component is the timer output.
 *          It will change on every second.
 * Version: 1.0
 * Author: dev@cefalo.com
 */

const Timer = () =>{
  const [timePassed, setTimePassed] = useState(0);

  // formats the time in `hh:mm:ss` format
  const formatTimePassed = () => {
    return (new Date(timePassed * 1000)).toISOString().substr(11, 8);
  };

  const resetTimer = () => {
    setTimePassed(0);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      setTimePassed(prev =>  prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);

  }, [timePassed]);

  return <div onClick={resetTimer} className="timer">{formatTimePassed()}</div>;
};
export default Timer;
