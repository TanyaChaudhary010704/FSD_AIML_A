import React from 'react';
import {useRef,useState} from 'react';
const RefEx = () => {
  // changes are only is memory they are not displayed
  //renendering is not done
  console.log("Object Rendered");
  const count = useRef(0);
  //rerendering is done
  const [count1, setcount1] = useState(0);
  function increment() {
    count.current++;
    if (count.current == 5) {
      alert(`refCount is : ${count.current}`)
    }
    console.log(count.current);
    setcount1(count1+1)
  }
  return (
    <div>
      <h1>Ref Counter:{count.current}</h1>
      <h1>Use State Counter:{count1}</h1>
      <button onClick={increment}>Increase</button>
    </div>
  )
}
export default RefEx