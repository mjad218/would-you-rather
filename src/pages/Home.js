import ListQuestions from "../components/ListQuestions";
import {getQuestions} from "../redux/actions/questions"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Home () {
    const dispatch = useDispatch(); 

    const user = useSelector( (state) => state.currentUser.id ); 

    useEffect( () => {
        dispatch(getQuestions()); 
    }, [dispatch]);

    let questions = useSelector( (store) => store.questions); 

    let answeredQuestions = Object.values(questions).filter( (q) => {
        for (let i = 0; i < q.optionOne.votes.length ; i++ ) {
            if(q.optionOne.votes[i] === user)
                return true;      
        }
        for (let i = 0; i < q.optionTwo.votes.length ; i++ ) {
            if(q.optionTwo.votes[i] === user)
                return true;      
        }
        return false; 
    });
    let unAnsweredQuestions = Object.values(questions).filter( (q) => {
        for (let i = 0; i < q.optionOne.votes.length ; i++ ) {
            if(q.optionOne.votes[i] !== user)
                return true;      
        }
        for (let i = 0; i < q.optionTwo.votes.length ; i++ ) {
            if(q.optionTwo.votes[i] !== user)
                return true;      
        }
        if(q.optionOne.votes.length === 0 && q.optionTwo.votes.length === 0) 
            return true;

        return false; 

    });

    const [showAnswered, setShowAnswered] = useState(true);

    return (
        <main>
            <div className="container">
                <div className="row">
                    <aside> 
                        <h4> 
                            Filter : 
                        </h4>
                        <span onClick={ () => setShowAnswered(true)}> 
                            Answered Question
                        </span>
                        <span onClick={ () => setShowAnswered(false)}> 
                            Unanswered Question
                        </span>
                    </aside>
                    <div> 
                        {showAnswered ? <ListQuestions questions={answeredQuestions} /> : <ListQuestions questions={unAnsweredQuestions} />}
                    </div>   
                </div>
            </div>
        </main>
    ) 

}