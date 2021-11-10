import {_saveQuestion} from "../../data/_DATA"

export const postQuestion = (q) => async (dispatch) => {
    const question = await _saveQuestion(q);  
    // console.log(question); 
    dispatch( {
        type : "ADD_QUESTION",
        question
    }) ;  
}


