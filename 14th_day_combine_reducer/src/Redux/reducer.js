import { ADD_COUNT, ADD_TODO } from "./action";
import { SUB_COUNT } from "./action";

const initState = {
    count: 0,
    todo: [],
}
export const reducer = (store = initState, {type, payload}) => {
    console.log("store: ", store)
    switch(type){
        case ADD_COUNT:
            return {...store, count: store.count + payload}
        case SUB_COUNT:
            return {...store, count: store.count - payload}
        case ADD_TODO:
            return {...store, todo:[...payload]}
        default:
            return store
    }
}