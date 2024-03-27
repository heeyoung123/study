import "./App.css";
import PropsPractice from "./Ex";

/*function App() {
  let data = { id: 4, pw: 78 };
  return <Ex props={data}></Ex>;
}*/

function App() {
  let data = { first: 4, second: 8 };
  return <PropsPractice props={data}></PropsPractice>;
}

export default App;
