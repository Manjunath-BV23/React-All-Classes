
// const {createStore} = require("redux")

import { createStore } from "redux";
import { ADD_COUNT, addCount } from "./Redux/actions.js";
import {reducer} from "./Redux/reducer.js"



class Store {
    constructor(reducer, initialState){
        this.reducer = reducer;
        this.state = initialState; //current state
    }

    getState = () => {
        return this.state
    }
    dispatch(action) {
        this.state = this.reducer(this.state, action)
    }
}

const initState = {count:0, todos: []}

const store = new createStore(reducer, initState);

console.log(store.getState())

store.dispatch(addCount(10))

console.log(store.getState())

store.dispatch(addCount(5))

console.log(store.getState())

store.dispatch({type: "ADD_TODO", payload: {title: "Sowji", status: true}})
console.log(store.getState())


