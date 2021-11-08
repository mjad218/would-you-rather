import Question from "./Question";
import {getQuestions} from "../redux/actions/questions"
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";

export default function ListQuestions () {
    const dispatch = useDispatch(); 

    useEffect( () => {
        dispatch(getQuestions()) 
    }, []); 
    let questions = useSelector( (store) => store.questions); 
    console.log(questions); 
    return (
        <Fragment>
            {
                Object.values(questions).map( (q) => {
                console.log(q); 
                return <Question key={q.id} question={q} /> 
            })
            }
            
        </Fragment>
    ) 

}