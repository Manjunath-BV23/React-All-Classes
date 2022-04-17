import { ADD_COUNT } from "./actions.js";

export const reducer = (store, {type, payload}) => {

    switch (type) {
        case ADD_COUNT:
            return {...store, count: store.count + payload};
        case "ADD_TODO":
            return {...store, todos: [...store.todos, payload] };
        default:
            return store
    }

    // if(action.type === "ADD_COUNT") {
    //     store.count = store.count + action.payload;
    // }
    // if(action.type === "DEC_COUNT") {
    //     store.count = store.count + action.payload;
    // }
    // if(action.type === "TOGGLE_THEME") {
    //     store.theme = store === "light" ? "dark":"light"
    // }
}