import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
const Registration = ({setregdata}) => {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [pass, setpass] = useState()
  function getData(e) {
    e.preventDefault()
    const data = { name, email, pass }
    setregdata(data);
    alert("Registration successful")
  }
  return (
    <div>
      <h1>Register Here</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">Name</label>
          <input type="text" onChange={(e)=>setname(e.target.value)} class="form-control" id="exampleInputName"/>
          <div id="name" class="form-text">We'll never share your name with anyone else.</div>
        </div>
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

export default Registration