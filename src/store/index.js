import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from '../localStorage'


// Actions
export function login(event) {
    return async (dispatch) => {
        const result = event
        return await dispatch({
            type: 'login',
            result
        })
    }
}

export function UserInfo(event) {
    return async (dispatch) => {
        const result = event
        return await dispatch({
            type: 'userInfo',
            result
        })
    }
}

export function UserProducts(event) {
    return async (dispatch) => {
        const result = event
        return await dispatch({
            type: 'userProducts',
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

export function searchCimriSubCategoryLink(event) {
    return async (dispatch) => {
        const result = await event
        return await dispatch({
            type: 'searchCimriSubCategoryLink',
            result
        })
    }
}

export function headerCimri(event) {
    return async (dispatch) => {
        const result = await event
        return await dispatch({
            type: 'headerCimri',
            result
        })
    }
}

export function productFavoriteUpdate(event) {
    return async (dispatch) => {
        const result = event
        return await dispatch({
            type: 'productFavoriteUpdate',
            result
        })
    }
}





// Reducer
const loginReducer = (state = [], actions) => {
    if (actions.type === "login") {
        return actions.result
    }
    else {
        return state
    }
}

const userInfoReducer = (state = [], actions) => {
    if (actions.type === "userInfo") {
        return actions.result
    }
    else {
        return state
    }
}
const userProductsReducer = (state = [], actions) => {
    if (actions.type === "userProducts") {
        return actions.result
    }
    if (actions.type === "productFavoriteUpdate") {
        return {
            ...state,
            favorite: [...state.favorite, actions.result]
        }
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
const searchCimriSubCategoryLinkReducer = (state = null, actions) => {
    if (actions.type === "searchCimriSubCategoryLink") {
        return actions.result
    }
    else {
        return state
    }
}

const headerCimriReducer = (state = [], actions) => {
    if (actions.type === "headerCimri") {
        return actions.result
    }
    else {
        return state
    }
}



// Loaders
const initialState = {
    User: {},
    UserInfo: {},
    /* Token: null, */
    CimriFirsatlar: {},
    searchCimri: {},
}

const persistedState = loadState(initialState);

export const allReducers = combineReducers({
    User: loginReducer,
    UserInfo: userInfoReducer,
    UserProducts: userProductsReducer,
    CimriFirsatlar: firsatlarReducer,
    searchCimri: searchCimriReducer,
    searchCimriSubCategoryLink: searchCimriSubCategoryLinkReducer,
    headerCimri: headerCimriReducer,
})

/* redux extension için */
/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
let store = createStore(allReducers, { ...persistedState }, composeWithDevTools(applyMiddleware(thunk)))

export default store