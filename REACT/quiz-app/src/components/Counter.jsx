import React,{useState,useEffect} from "react";
const Counter = () => {
  const [count,setCount] = useState(0);
  const [count1,setCount1] = useState(0);
  //const count = Array[0];
  //const setCount = Array[1];
  function handleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    setCount(count - 1);
  }
  useEffect(() => {
    alert("hi",{count})
    setCount1(count * 5);
  },[count])
  return (
    <div>
      <h1>Counter:{count }</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>Counter-1:{count1 }</h1>
    </div>
  )
}
export default Counter;