import './Registration.css'
const Registration = () => {
  async function sendData(e) {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    //console.log(name,email,password)
    const response = await fetch("http://localhost:3001/register",{
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers:{'Content-Type':'application/json'}
    })
    const res = await response.json();
    alert(res.message)
  }
  return (
    <div>
      <form action="" onSubmit={sendData}>
        <label>Name</label>
        <input name="name" placeholder="Enter name" required/>
        <label>Email</label>
        <input name="email" placeholder="Enter email" required/>
        <label>Password</label>
        <input name="password" placeholder="Enter password" required/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Registration