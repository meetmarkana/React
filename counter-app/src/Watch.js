import React from 'react'
import { useEffect,useState } from 'react';
function Watch() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      let intervalId;
  
      if (isRunning) {
        intervalId = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      } else {
        clearInterval(intervalId);
      }
  
      return () => clearInterval(intervalId);
    }, [isRunning]);
  
    const handleStartStop = () => {
      setIsRunning(prevState => !prevState);
    };
  
    const handleReset = () => {
      setIsRunning(false);
      setTime(0);
    };
  
    const formatTime = (timeInSeconds) => {
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = Math.floor(timeInSeconds % 60);
  
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');
  
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };
  
    return (
      <div className="stopwatch-container">
        <h1>Stopwatch</h1>
        <div className="stopwatch-time">{formatTime(time)}</div>
        <button className="stopwatch-button" onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button className="stopwatch-button" onClick={handleReset}>Reset</button>
      </div>
    );
}

export default Watch