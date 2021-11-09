export const LoggedReducer = (state, {type, payload}) => {
    switch(type) {
        case "UPDATE_USER": 
            return {...state , LoggedInReducer : payload};
        default : 
            return {...state};
    }; 
}

export default LoggedReducer; 