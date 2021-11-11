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
    console.log(question); 
    let user = Object.values(users).filter( (u) => u.id === question.author );
    user = user["0"];
    const handleAnswers = (answer) => {
        let flag = true;
        for (let i = 0; i < question.optionOne.votes.length; i++) {
            if (question.optionOne.votes[i] === currentUser) flag = false;
        }
        for (let i = 0; i < question.optionTwo.votes.length; i++) {
            if (question.optionTwo.votes[i] === currentUser) flag = false;
        }
        
        if(flag) {
            dispatch( updateQuestion(question , { authedUser : currentUser , qid : question.id , answer : answer}) );     
        } 
    }
    function format_time(s) {
        const date = new Date(s * 1000);
        const month = date.getMonth();
        const day = date.getDate();
        const mm = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; 
        return `Posted on ${day}, ${mm[month]}`;
    }
      
    return (
        <div className="question">
            { user ? <img className="image" src={ user.avatarURL } alt={user.name} /> : ""} 
            <div>  
                <h3 > { user ? user.name : question.author }<span > asks:</span></h3>
                <span className="date"> 
                    {format_time(question.timestamp)}
                </span>
                <h4> 
                    Would You Rather? 
                </h4>
                <div onClick={() => handleAnswers("optionOne") } className={question.optionOne.votes.filter((v) => v === currentUser ).length ? "option chosen" : "option" } > 
                    <p>
                        {question.optionOne.text} 
                    </p>
                    <span > {question.optionOne.votes.length} votes out of {question.optionOne.votes.length + question.optionTwo.votes.length} votes </span>
                </div>
                <div onClick={() => handleAnswers("optionTwo")} className={question.optionTwo.votes.filter((v) => v === currentUser ).length ? "option chosen" : "option" }> 
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