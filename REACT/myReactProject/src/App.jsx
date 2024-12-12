import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
const App = () => {
  const [regData, setRegData] = useState();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/login" element={<Login regdata = {regData}/>}></Route>
          <Route path="/register" element={<Registration setregdata = {setRegData}/>}></Route>
        </Route>
        <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
        <Route path="/logout" element={<h1>logout</h1>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App