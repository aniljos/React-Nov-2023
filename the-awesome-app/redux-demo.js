
//import {createStore} from 'redux';
const redux = require('redux');
const createStore = redux.createStore;

console.log("redux-demo");
//initial data
const initState ={
    count: 5,
    msg: 'hello'
}

//define the reducer
const reducer = (currentState=initState, action) => {

    console.log("action received ", action);

    //return the updated state;
    if(action.type === "INC_CTR"){
        return {
            ...currentState,
            count: currentState.count + 1
        }
    }
    if(action.type === "DECR_CTR"){
        return {
            ...currentState,
            count: currentState.count - 1
        }
    }
    if(action.type === "UPD_CTR"){
        return {
            ...currentState,
            count: action.value
        }
    }
    
    return currentState;
}

//create the store
const store = createStore(reducer);
console.log("state: ", store.getState());

//subscribe

store.subscribe(() => {
    console.log("state in subscriber: ", store.getState());
})


//dispatch an action
store.dispatch({type: "INC_CTR"});
//console.log("state: ", store.getState());

store.dispatch({type: "UPD_CTR", value: 100});
//console.log("state: ", store.getState());

store.dispatch({type: "DECR_CTR"});
//console.log("state: ", store.getState());

