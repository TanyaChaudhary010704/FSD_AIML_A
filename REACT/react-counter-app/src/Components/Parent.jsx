import React from 'react'
import Child1 from './Child1'
function Parent() {
  const stu = {
    name: "XYZ",
    age: 20,
  }
  return (
    <div>
      <h1>Parent</h1>
      <Child1 student = {stu}/>
    </div>
  )
}

export default Parent