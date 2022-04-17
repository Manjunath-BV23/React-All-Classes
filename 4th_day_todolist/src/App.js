import './App.css';
import {useState} from "react"
import {Todo} from "./components/Todo"
function App() {
  // const [counter, setCounter] = useState(0);
  // // const handleChange = (value) => {
  // //   setCounter(counter + value)
  // // }

  // const getData = (data) => {
  //   console.log(data)
  //   setCounter(data)
  // }

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

// function Left ({fn}) {
//   const counter = 10;
//   fn(counter)
//   return <div>LeftValue:</div>
// }
// function Right({data}) {
//   return <div>Right:{data}</div>
// }


export default App;
