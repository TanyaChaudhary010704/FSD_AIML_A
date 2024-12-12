import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<h1>Registration</h1>}></Route>
        </Route>
        <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
        <Route path="/logout" element={<h1>logout</h1>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App