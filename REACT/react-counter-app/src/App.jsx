import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Counter from "./Components/Counter"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/stopwatch" element={<h1>Stop Watch app</h1>}></Route>
        <Route path="*" element={<h1>No Page available</h1>}></Route>
      </Routes>

    </div>
  )
}
export default App;