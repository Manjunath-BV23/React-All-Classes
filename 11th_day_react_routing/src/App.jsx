import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import { Hello } from './components/Hello';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { ProductDetails } from './components/ProductDetails';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route></Route>
        <Route path = "/" element={<Hello/>} ></Route>
        <Route path = "/about" element={<About/>}></Route>
        <Route path = "/users" element={<Users/>}></Route>
        <Route path = "/login" element={<Login/>}></Route>
        <Route path = "/users/:userid" element={<UserDetails/>}></Route>
        <Route path = "/product/:id" element={<ProductDetails/>}></Route>


      </Routes>
    </div>
  );
}

export default App;
