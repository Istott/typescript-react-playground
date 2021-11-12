const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'deposit':
            return state + action.payload;
        case 'withdrawl':
            return state - action.payload;
        default:
            return state;
    }
}

export default reducer;