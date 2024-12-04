import React,{useState} from "react";
const Counter = () => {
  const [count, setcount] = useState(0);
  function handleIncrease() {
    setcount(count + 1);
  }
  function handleDecrease() {
    setcount(count - 1);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h1>Counter:{count}</h1>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>
    </div>
  )
}
export default Counter;