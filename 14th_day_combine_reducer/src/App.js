import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import { store } from './Redux/store';
import { Todo } from './Components/Todos';

function App() {
  
  return (
    <div className="App">
      <Counter/>
      <hr/>

      <Todo></Todo>
    </div>
  );
}

export default App;
