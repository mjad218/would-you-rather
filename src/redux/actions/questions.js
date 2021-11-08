import {_getQuestions} from "../../data/_DATA"

export const getQuestions = () => async (dispatch) => {
    const questions = await _getQuestions(); 
    dispatch({
        type : "FETCH_QUESTIONS", 
        questions
    });  
    // users = await users.json();
    // console.log(questions);
}


