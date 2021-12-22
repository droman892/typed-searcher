export const searchQueryAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'searchQuery',
            payload: data,
        })
    }
}
