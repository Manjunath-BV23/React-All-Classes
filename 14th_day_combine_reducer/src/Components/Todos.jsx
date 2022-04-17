import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";
import axios from "axios";
export const Todo = () => {
    const [text, setText] = useState()
    const todos = useSelector((store) => store.todo)
    const dispatch = useDispatch();
    useEffect(() => {
        getTodos()
    }, [])
    const getTodos = () => {
        axios.get("http://localhost:8080/todos").then(({data}) => {
            dispatch(addTodo(data))
        })
    }
    const addTodos = () => {
        axios.post("http://localhost:8080/todos", {
            title: text,
            status: false,
        })
        .then(() => getTodos())
    }
    return(
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => {
                dispatch(addTodos(text))
            }}>Add Todo</button>
            {todos.map((e,i) => (
                <div key = {i}>{e.title}</div>
            ))}
        </div>
    )
}