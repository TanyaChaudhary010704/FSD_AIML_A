import { Routes, Route } from 'react-router-dom';
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/counter2" element={<Counter2/>}></Route>
        <Route path="/" element={<h1>Home page</h1>}></Route>
        <Route path="/login" element={<h1>Login page</h1>}></Route>
        <Route path="/logout" element={<h1>Logout page</h1>}></Route>
        <Route path="*" element={<h1>No page available</h1>}></Route>
      </Routes>
      <h1>Abes</h1>
    </div>
  )
}
export {App}