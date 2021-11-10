import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {postQuestion} from "../redux/actions/post"
import { useNavigate } from "react-router";
export default function Add () {
    const [optionOne, setOptionOne] = useState(""); 
    const [optionTwo, setOptionTwo] = useState(""); 

    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const user = useSelector((state) => state.currentUser.id); 
    const addQuestion = (e) => {
        e.preventDefault(); 
        const q = {optionOneText : optionOne, optionTwoText : optionTwo, author : user}
        // console.log( q); 
        dispatch(postQuestion(q)); 
        navigate("/");
    }
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="wrapper">
                        <div className="title">
                            <h1> 
                                Add a Question! 
                            </h1>
                            <p> 
                                Try adding a question and let outhers answer it. 
                            </p>
                        </div>
                        <div className="app">
                            <span >
                                Would You Rather!  
                            </span>
                            <form id="form"  onSubmit={addQuestion} > 
                                <input type="text" placeholder="option one..." value={optionOne} onChange={(e) => setOptionOne(e.target.value)}/> 
                                <input type="text" placeholder="option two..." value={optionTwo} onChange={(e) => setOptionTwo(e.target.value)} /> 
                                <input type="submit" value="Get ID" /> 
                            </form>
                            <div className="output" id="output" >
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    ) 

}
        