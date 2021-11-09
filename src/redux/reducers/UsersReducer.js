export const UsersReducer = (state, {type, users}) => {
    switch(type) {
        case "FETCH_USERS": 
            return { ...state , ...users };
        case "UPDATE_USER": 
            return {};
        default : 
            return {...state};
    }; 
}

export default UsersReducer; 