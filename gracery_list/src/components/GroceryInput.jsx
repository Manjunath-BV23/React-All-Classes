import { useState } from "react"

export const GroceryInput = ({addList}) => {
    const [item, setItem] = useState("")
    return(
        <div>
            <input type = "text" onChange={(e) => {
                setItem(e.target.value)
            }} />
            
            <button onClick={() => {
                addList(item)
            }}> Add Grocery</button>
        </div>
    )
} 