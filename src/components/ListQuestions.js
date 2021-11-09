import Question from "./Question";
import { Fragment} from "react";

export default function ListQuestions ({questions}) {
    return (
        <Fragment>
            {
                Object.values(questions).map( (q) => {
                // console.log(q); 
                return <Question key={q.id} question={q} /> 
            })
            }
            
        </Fragment>
    ) 

}