import React from 'react'

export const Child3 = ({student}) => {
  return (
    <div>
      <h1>Child3 Component</h1>
      <h2>{student.name}</h2>
      <h2>{student.age}</h2>
    </div>
  )
}
export default Child3;
