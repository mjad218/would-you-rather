import UsersReducer from "./UsersReducer";
import QuestionsReducer from "./QuestionsReducer";
import LoggedInReducer from "./LoggedInReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    questions : QuestionsReducer , 
    users : UsersReducer, 
    currentUser : LoggedInReducer
}); 

export default RootReducer;