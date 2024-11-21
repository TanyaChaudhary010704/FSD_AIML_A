import React,{useState,useEffect} from "react";
const Counter2 = () => {

  const[height,setHeight] = useState(100);
  const[width,setWidth] = useState(100);
  const[color,setColor] = useState("red");
  const [angle, setAngle] = useState(0);
  let box = document.querySelector(".box");
  function rotate() {
    setAngle(angle+30);
    box.setAttribute("transform",);
  }
  function changeColor() {
    setColor("Yellow");
    box.setAttribute("backgroundColor", color);
  }
  function changeHeight() {
    setHeight(height+10);
    box.setAttribute("height", height);
  }
  function changeWidth() {
    setWidth(width+10);
    box.setAttribute("width", width);
  }
  return (
    <div>
      <div className="box" style={
        { height: `${height}px`, width: `${width}px` , backgroundColor: `${color}`, transform: `rotate(${angle}deg)`  }
      }>Box</div>
      <button onClick={rotate}>Rotate</button>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeHeight}>Change height</button>
      <button onClick={changeWidth}>Change width</button>
    </div>
  )
}
export default Counter2;