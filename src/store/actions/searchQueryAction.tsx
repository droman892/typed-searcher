export const searchQueryAction = (text) => {
    return (dispatch) => {
        dispatch({
            type: 'searchQuery',
            payload: text,
        })
    }
}
