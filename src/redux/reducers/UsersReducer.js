export const UsersReducer = (state, {type, users, currentUser}) => {
    switch(type) {
        case "FETCH_USERS": 
            return { ...state , ...users };
        case "UPDATE_USER": 
            return {...state, ...currentUser};
        default : 
            return {...state};
    }; 
}

export default UsersReducer; 