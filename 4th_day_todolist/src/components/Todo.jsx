import {TodoInput} from "./Todoinput"
import { useState } from "react"
import { TodoItem } from "./Todoitem"


export const Todo = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (data) => {
        setTodos([...todos, data])
    }


    return <div>
        <TodoInput addTodo = {addTodo} />
        
        { todos.map((e) => (
        <TodoItem todo = {e} />
        ))}
    </div>
};