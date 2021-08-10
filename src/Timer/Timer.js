import React, {useState, useEffect} from 'react';
/*
 * Purpose: The purpose of this component is to render common errors.
 *          This component is going to be common to all the routes.
 * Version: 1.0
 * Author: dev@cefalo.com
 */

const Timer = (props) =>{
  const [timePassed, setTimePassed] = useState(0);

  // formats the time in `hh:mm:ss` format
  const formatTimePassed = () => {
    return (new Date(timePassed)).toISOString().substr(11, 8);
  };

  const resetTimer = () => {
    setTimePassed(0);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      // const newValue = timePassed + 1;
      setTimePassed(prev => (prev + 1));
    }, 100);

    return () => clearInterval(intervalId); // This is important

  }, [timePassed]);

  return <div onClick={resetTimer}>{formatTimePassed()}</div>;
};
export default Timer;
