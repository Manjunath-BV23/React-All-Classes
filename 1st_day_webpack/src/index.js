import {add, print} from "./calc"

import "./index.css"

console.log(add(5, 3))
console.log(print("Manjunath"))
console.log(add(3, 2))
console.log(add(1, 1))


const h1 = document.createElement("h1");
h1.innerHTML = "Welcome to Webpack";
h1.classList.add("redtext");

document.getElementById("root").appendChild(h1)