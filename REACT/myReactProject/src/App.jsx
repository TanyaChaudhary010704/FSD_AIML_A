import React from 'react'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/login" element={<h1>Login</h1>}></Route>
        <Route path="/registration" element={<h1>Registration</h1>}></Route>
        <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
        <Route path="/logout" element={<h1>logout</h1>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App