import Question from "../components/Question";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function SingleQuestion () {
    const {id} = useParams();
    const questions = useSelector( (state => state.questions) ); 
    const q = Object.values(questions).filter( (q) => q.id === id)["0"];

    return (
        <main>
            <div className="container">
                <div className="row">
                    <Question key={q.id} question={q} />
                </div>
            </div>
        </main>
    ) 

}