import React,{useContext,createContext} from 'react'
import Child1 from './Child1'
const StudentContext = createContext()
function Parent() {
  const stu = {
    name: "XYZ",
    age: 20,
  }
  return (
    <StudentContext.Provider value={stu}>
    
    <div>
      <h1>Parent</h1>
      <Child1/>
      </div>
        
    </StudentContext.Provider>
  )
}
export {StudentContext}
export default Parent