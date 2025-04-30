const fs = require("fs").promises;
const http = require("http");
const port = 3001;
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    //res.send("<h2>Welcome to Express</h2>")
    res.status(200).json({ msg: "This is default end point" });
  }
  catch (err) {
    res.status(500).json({ msg: err });
  }
})

app.post("/register", async (req, res) => {
  try {
    let arr = [];
    const { name, email, password } = req.body;
    console.log(name + email + password);
    const data = await fs.readFile('student.json', { encoding: 'utf-8' });
    arr = JSON.parse(data);

    const status = arr.find((ele) => ele.email == email && ele.password == password);
    if (status) {
      return res.status(203).json({message:"Email is already registered"})
    }
    else {
      arr.push({ name, email, password });
      await fs.writeFile('student.json', JSON.stringify(arr, null, 2));
      res.status(200).json({ message: "register successfully" });
    }
  }
  catch (err) {
    res.status(500).json({ msg: err });
  }
})

app.post("/login", async (req, res) => {
  try {
    let arr = [];
    const { name, email, password } = req.body;
    console.log(name + email + password);
    const data = await fs.readFile('student.json', { encoding: 'utf-8' });
    arr = JSON.parse(data);

    const status = arr.find((ele) => ele.email == email && ele.password == password);
    if (status) {
      return res.send(<h1>"Email is already registered"</h1>)
    }
    else {
      return res.send(<h1>"Invalid user"</h1>)
    }
  }
  catch (err) {
    res.status(500).json({ msg: err });
  }
})

app.get("/admin/show", async (req, res) => {
  try {
    const data = await fs.readFile('student.json', { encoding: 'utf-8' });
    const arr = JSON.parse(data);
    res.status(200).json({ message: arr })
  } catch (err) {
    res.status(500).json({message:err.message})
  }
})

app.get("admin/searchbyemail/:email", (req,res) => {
  const id = req.params.email;
  console.log(id);
  res.json({message:"hi, inside searchbyid"})
})

app.listen(port, () => {
  console.log("Express server is running on" + port);
})
