const searchQueryReducer = (state = '', action) => {
    switch (action.type) {
        case 'searchQuery':
            return action.payload
        default:
            return state
    }
}

export default searchQueryReducer
