import {_saveQuestion} from "../../data/_DATA"

export const postQuestion = (q) => async (dispatch) => {
    const questions = await _saveQuestion(q); 
    dispatch({
        type : "ADD_QUESTION", 
    });  
    // users = await users.json();
    // console.log(questions);
}


