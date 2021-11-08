export const QuestionsReducer = (state = {}, {type, questions}) => {
    switch(type) {
        case "FETCH_QUESTIONS": 
            return { ...state , ...questions };
        case "UPDATE_QUESTION": 
            return {};
        case "ADD_QUESTION": 
            return {};
        default : 
            return {};
    }; 
}

export default QuestionsReducer; 