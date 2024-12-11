import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li><Link to="/counter"> Counter app</Link></li>
        <li><Link to="/stopwatch"> StopWatch app</Link></li>
        <li><Link to="/refex"> Ref example app</Link></li>
        <li><Link to="/parent"> Props drilling problem or use context </Link></li>
        <li><Link to="/reducer">Use Reducer example</Link></li>
      </ul>
    </div>
  )
}
export default Home;