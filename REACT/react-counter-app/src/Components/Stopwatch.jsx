import React,{useState,useEffect} from "react";
const Stopwatch = () => {
  const [time,settime] = useState(3601)
  const [isrunning, setisrunning] = useState(false) 
  const [isvalid, setisvalid] = useState(null) 

  function startstop() {
    setisrunning((pre) => !pre)
    clearInterval(isvalid)
  }

  useEffect(() => {
    if (isrunning) {
      const id = setInterval(() => {
        settime((time)=>(time+1))
      }, 1000)
      setisvalid(id);
    }
    return () => clearInterval(isvalid)
  }, [isrunning])
  
  function timeformat(time) {
    let hours = Math.floor(time / (3600))
    let minutes = Math.floor((time / 60)%60)
    if (minutes == 60) {
      minutes = 0
    }
    if (hours == 24) {
      reset()
    }
    let seconds = time % 60;
    const h = hours < 10 ? `0${hours}` : hours;
    const m = minutes < 10 ? `0${minutes}` : minutes;
    const s = seconds < 10 ? `0${seconds}` : seconds;
    return `${h}:${m}:${s}`
  }

  function reset() {
    settime(0)
    setisrunning(false)
  }

  return (
    <div>
      <h1>StopWatch app</h1>
      <h1>{timeformat(time)}</h1>
      <button onClick={startstop}>{isrunning? 'Stop':'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
export default Stopwatch;