import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
const Login = ({ regdata }) => {
  const [email, setemail] = useState()
  const [pass, setpass] = useState()
  const navigate = useNavigate()
  function getData(e) {
    e.preventDefault()
    if (regdata.email == email && regdata.pass == pass) {
      alert("Login successful")
      // navigate("/dashboard")
    }
    else {
      alert("Login failed")
    }
    console.log(regdata.email)
    console.log(regdata.pass)
    console.log(email)
    console.log(pass)
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" onChange={(e)=>setemail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" onChange={(e)=>setpass(e.target.value)} class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" onClick={getData} class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login