import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {login} from "../redux/actions/login"

export default function LogIn () {
    let users = useSelector( (store) => store.users); 
    const [user , setUser] = useState(""); 
    const dispatch = useDispatch(); 

    const handleLogin = (e) => {
        console.log(e.target.value); 
        setUser(e.target.value);
        dispatch(login (e.target.value) );
    }
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div> 
                        <div className="title">
                            <h1> 
                                Please Log In! 
                            </h1>
                        </div>
                        <div className="app">
                            <span >
                                Enter you username and password!  
                            </span>
                            <form id="form" > 
                                <input type="text" placeholder="Username..." /> 
                                <input type="text" placeholder="Password..." /> 
                                <input type="submit" value="Get ID" /> 
                            </form>
                            <span >
                                Or choose a user  
                            </span>
                            <select value={user} onChange={handleLogin}> 
                                {Object.values(users).map( (u) => <option key={u.id} value={u.id}> {u.name}</option>) }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    ) 
}