const initialState = {
    num : 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT" : 
            return {
                num : state.num + 1
            }
        case "DECREMENT" : 
            return {num : state.num - 1}
        default : 
            return state
    }
}

export default reducer;