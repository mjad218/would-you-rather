export const UsersReducer = (state, {type, users}) => {
    switch(type) {
        case "FETCH_USERS": 
            return { ...state , ...users };
        default : 
            return {...state};
    }; 
}

export default UsersReducer; 