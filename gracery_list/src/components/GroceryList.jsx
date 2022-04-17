export const GroceryList = ({data, status, id, deleteItem}) => {
    return <div>{data}
        <button onClick={() => deleteItem(id)}>Delete</button>
    </div>
}