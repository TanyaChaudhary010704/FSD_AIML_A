import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import Dashboard from './Dashboard'
import Home from './Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="*" element={<h1>404 Page not available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App