import {_getUsers} from "../../data/_DATA"
let users = []; 
const getUsers = async () => {
    users = await _getUsers(); 
    // users = await users.json();
    console.log(users);
}



const UsersReducer = (state = users , action) => {
    return state; 

}

export default UsersReducer; 