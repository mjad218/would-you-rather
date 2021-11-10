import { useSelector } from "react-redux"
import {updateQuestion} from "../redux/actions/updateQuestion"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function Question ({question}) {
    const {id} = useParams(); 

    const dispatch = useDispatch(); 
    const users = useSelector((state) => state.users ); 
    const currentUser= useSelector((state) => state.currentUser.id ); 

    let user = Object.values(users).filter( (u) => u.id === question.author );
    user = user["0"];
    // console.log(question);  
    const handleAnswers = (option) => {
        dispatch( updateQuestion(question , { authedUser : currentUser , qid : question.id , answer : option}) ); 
    } 
    return (
        <div className="question">
            { user ? <img className="image" src={ user.avatarURL } alt={user.name} /> : ""} 
            <div>  
                <h3 > { user ? user.name : question.author }<span > asks:</span></h3> 
                <h4> 
                    Would You Rather? 
                </h4>
                <div className="option" onClick={() => handleAnswers("optionOne") }> 
                    <p>
                        {question.optionOne.text} 
                    </p>
                    <span > {question.optionOne.votes.length} votes out of {question.optionOne.votes.length + question.optionTwo.votes.length} votes </span>
                </div>
                <div className="option" onClick={() => handleAnswers("optionTwo")}> 
                    <p> 
                        {question.optionTwo.text}   
                    </p>
                    <span > {question.optionTwo.votes.length} votes out of {question.optionOne.votes.length + question.optionTwo.votes.length} votes </span>

                </div>
                {!id && <Link to={"questions/" + question.id}> View Question </Link>}
            </div>
        </div>
    ) 

}