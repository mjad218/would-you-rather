export default function Question ({question}) {

    return (
        <div className="question">
            <img className="image" src="https://avatars.githubusercontent.com/u/59421219?v=4" /> 
            <div> 
                <h3 > {question.author }<span > asks:</span></h3> 
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