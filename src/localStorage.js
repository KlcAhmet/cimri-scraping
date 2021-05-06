export const loadState = (initialState) => {
    try {
        const serialStates = {}
        Object.keys(initialState).forEach(element => {
            if (localStorage.getItem(element)) {
                const serialState = JSON.parse(localStorage.getItem(element))
                serialStates[element] = serialState[element]
            }
            else {
                serialStates[element] = initialState[element]
            }
        })
        return serialStates
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    console.dir(state)
    try {
        const serialState = JSON.stringify(state);
        localStorage.setItem(Object.keys(state), serialState);
    } catch (err) {
        console.log(err);
    }
}