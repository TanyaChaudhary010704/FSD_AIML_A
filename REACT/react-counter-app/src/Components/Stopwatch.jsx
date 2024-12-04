import React,{useState} from "react";
const Stopwatch = () => {
  const [min,setmin] = useState(0)
  const [sec, setsec] = useState(0)
  const [isrunning,setisrunning] =useState(false) 
  function startstop() {
    setisrunning((prev) => !prev)
    if (isrunning) {
      setInterval(() => {
        setsec(sec + 1);
      }, 1000)
      setInterval(() => {
        setmin(min + 1);
      }, 60000)
    }
    
    
  }
  function reset() {
    
  }
  return (
    <div>
      <h1>StopWatch app</h1>
      <h1>{`${min}:${sec}`}</h1>
      <button onClick={startstop}>{isrunning? 'Stop':'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
export default Stopwatch;