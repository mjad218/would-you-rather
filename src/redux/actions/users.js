import {_getUsers} from "../../data/_DATA"

export const getUsers = () => async (dispatch) => {
    const users = await _getUsers(); 
    dispatch({
        type : "FETCH_USERS", 
        users
    });  
    // users = await users.json();
    // console.log(questions);
}


