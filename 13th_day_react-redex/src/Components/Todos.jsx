import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";

export const Todo = () => {
    const [text, setText] = useState()
    const todos = useSelector((store) => store.todo)
    const dispatch = useDispatch();

    console.log("Rendering Todo")

    return(
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => {
                dispatch(addTodo(text))
            }}>Add Todo</button>
            {todos.map((e,i) => (
                <div key = {i}>{e}</div>
            ))}
        </div>
    )
}