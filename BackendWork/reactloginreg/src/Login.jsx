import React from 'react'

const Login = () => {
  async function sendData(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    //console.log(name,email,password)
    const response = await fetch("http://localhost:3001/login",{
      method: "POST",
      body: JSON.stringify({email, password }),
      headers:{'Content-Type':'application/json'}
    })
    const res = await response.json();
    alert(res.message)
  }
  return (
    <div>
      <form action="" onSubmit={sendData}>
        <h1>Login form</h1>
        <label>Email</label>
        <input name="email" placeholder="Enter email" required/>
        <label>Password</label>
        <input name="password" placeholder="Enter password" required/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login