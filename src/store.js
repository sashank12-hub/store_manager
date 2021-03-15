import {createStore} from 'redux';
import {reducer} from "./reducer"


export const store=()=>{
    const store= createStore(reducer);
    return store;
}


 