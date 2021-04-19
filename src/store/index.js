import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from '../localStorage'


// Actions
export function login(event) {
    return async (dispatch) => {
        const result = "await ...."
        return await dispatch({
            type: 'login',
            result
        })
    }
}

export function firsatlar(event) {
    return async (dispatch) => {
        const result = await event
        return await dispatch({
            type: 'firsatlar',
            result
        })
    }
}

export function searchCimri(event) {
    return async (dispatch) => {
        const result = await event
        return await dispatch({
            type: 'searchCimri',
            result
        })
    }
}




// Reducer
const loginReducer = (state = [], actions) => {
    if (actions.type === "login") {
        return actions
    }
    else {
        return state
    }
}

const firsatlarReducer = (state = [], actions) => {
    if (actions.type === "firsatlar") {
        return actions.result
    }
    else {
        return state
    }
}

const searchCimriReducer = (state = [], actions) => {
    if (actions.type === "searchCimri") {
        return actions.result
    }
    else {
        return state
    }
}


// Loaders
const initialState = {
    User: {},
    /* Token: null, */
    CimriFirsatlar: {},
}

const persistedState = loadState(initialState);

export const allReducers = combineReducers({
    User: loginReducer,
    CimriFirsatlar: firsatlarReducer,
    searchCimri: searchCimriReducer,
})

/* redux extension için */
/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
let store = createStore(allReducers, { ...persistedState }, composeWithDevTools(applyMiddleware(thunk)))

export default store