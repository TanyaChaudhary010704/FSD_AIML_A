import {Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/counter" elements={<h1>Counter App</h1>}></Route>
        <Route path="/" elements={<h1>Home page</h1>}></Route>
        <Route path="/login" elements={<h1>Login page</h1>}></Route>
        <Route path="/logout" elements={<h1>Logout page</h1>}></Route>
        <Route path="*" elements={<h1>No page available</h1>}></Route>
      </Routes>
      <h1>Abes</h1>
    </div>
  )
}
export {App}