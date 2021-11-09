export const login = () => (dispatch , user) => {
    dispatch({
        type : "UPDATE_USER", 
        user
    });  
}


