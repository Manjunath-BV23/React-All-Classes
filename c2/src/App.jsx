import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse"
import { useState } from "react";

function App() {
  const [add, setAdd] = useState(true);
  return (
    <div className="App">
      {add ? <Rentals/>:<AddHouse/>}
      <button className="toggeleForm" onClick={() => {
        setAdd(add? false:true)
      }}>
        {add ? "Add House": "Rent"}
      </button>
     
      <br />

    </div>
  );
}

export default App;
