export const QuestionsReducer = (state, {type, questions, question}) => {
    switch(type) {
        case "FETCH_QUESTIONS": 
            return { ...state , ...questions };
        case "UPDATE_QUESTION": 
            return {...state};
        case "ADD_QUESTION": 
            return { ...state, [question.id] : question};
        default : 
            return {...state};
    }; 
}

export default QuestionsReducer; 