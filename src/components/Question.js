import { useSelector } from "react-redux"

export default function Question ({question}) {

    const users = useSelector((state) => state.users ); 
    let user = Object.values(users).filter( (u) => u.id === question.author );
    user = user["0"];
    console.log(user);  

    return (
        <div className="question">
            { user ? <img className="image" src={ user.avatarURL } alt={user.name} /> : ""} 
            <div>  
                <h3 > { user ? user.name : question.author }<span > asks:</span></h3> 
                <h4> 
                    Would You Rather? 
                </h4>
                <p> 
                    {question.optionOne.text} 
                </p>
                <p> 
                    {question.optionTwo.text} 
 
                </p>
            </div>
        </div>
    ) 

}