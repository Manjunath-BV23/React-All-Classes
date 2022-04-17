import { useState } from "react"
import {GroceryInput} from "./GroceryInput"
import { GroceryList } from "./GroceryList"
import { v4 as uuid} from "uuid";

export const Grocery = () => {

    const [groceries, setGroceries] = useState([])

    const addList = (data) => {
        const product = {
            data,
            status: false,
            id: uuid()
        }
        setGroceries([...groceries, product])
    }
    const deleteItem = (itemId) => {
        //console.log(groceries.filter((e) => e.id != itemId))
        const update = groceries.filter((e) => e.id != itemId);
        setGroceries(update)
    }

    return (
        <div>
            < GroceryInput addList = {addList}/>
            {groceries.map((e) => (
                <GroceryList deleteItem = {deleteItem} {...e} />
            ))}
        </div>
    )
}