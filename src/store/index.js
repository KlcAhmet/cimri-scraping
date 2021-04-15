import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from '../localStorage'
import Post from '../services/Post'


// actions
export function login(event) {
    return async (dispatch) => {
        const result = await Post.postLoginData(event)
        return await dispatch({
            type: 'login',
            result
        })
    }
}


// reducer
const setUserReducer = (state = [], actions) => {
    if (actions.type === "login" && actions.result.data.IsSuccess === true) {
        return actions.result.data
    }
    else {
        return state
    }
}


const initialState = {
    User: {},
    Token: null,
    ContactList: null,
    Test: 'asdsad'
}

const persistedState = loadState(initialState);

export const allReducers = combineReducers({
    User: setUserReducer,
    ContactList: getContactListReducer,
    Token: setTokenReducer,
    Test: testReducer
})

/* redux extension için */
/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
let store = createStore(allReducers, { ...persistedState }, composeWithDevTools(applyMiddleware(thunk)))

export default store