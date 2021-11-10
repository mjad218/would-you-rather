import {_saveQuestionAnswer} from "../../data/_DATA"

export const updateQuestion = (q , obj ) => async (dispatch) => {
    await _saveQuestionAnswer(obj); 
    const question = {...q ,
        [obj.answer]: {
        ...q[obj.answer],
        votes: q[obj.answer].votes.concat([obj.authedUser])
      }
    
    }
    console.log(question); 
    dispatch( {
        type : "UPDATE_QUESTION",
        question 
    }) ;  
}


