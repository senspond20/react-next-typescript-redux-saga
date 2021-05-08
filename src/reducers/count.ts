import { INCREMENT, DECREMENT,RESET, SET_DIFF } from '@action/count'; 
import { AnyAction, combineReducers } from 'redux'; 

const counterInitialState = { value: 0, diff: 1 }; 
const counter = (state = counterInitialState, action : AnyAction) => { 
    switch(action.type) { 
        case INCREMENT: 
            return Object.assign({}, state, { 
                value: state.value + state.diff 
            }); 
        case DECREMENT: 
            return Object.assign({}, state, { 
                value: state.value - state.diff 
            }); 
        case RESET : 
            return Object.assign({}, state, { 
                value: 0
            }); 
        case SET_DIFF: 
            return Object.assign({}, state, {
                 diff: action.diff 
            }); 
        default: return state; 
    } } 
const counterApp = combineReducers({ counter }); 
export default counterApp;
