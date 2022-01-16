const reducer =  (state = [], action) => {
    switch (action.type) {
        case `FETCH_ALL`:
            return action.payload;
        case 'CREATE':
            return [...state, action.payload];
        case 'UPDATE':
            return (state.map(p => p._id === action.payload._id ? action.payload : p));
        default:
            return state;
    }
}

export default reducer


