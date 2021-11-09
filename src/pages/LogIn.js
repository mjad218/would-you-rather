import { useDispatch, useSelector } from "react-redux";

export default function LogIn () {
    let users = useSelector( (store) => store.users); 

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
                                <input type="text" placeholder="Username..." id="username"/> 
                                <input type="text" placeholder="Password..." id="username"/> 
                                <input type="submit" value="Get ID" /> 
                            </form>
                            <span >
                                Or choose a user  
                            </span>
                            <select > 
                                {Object.values(users).map( (u) => <option key={u.id}> {u.name}</option>) }
                            </select>
                        </div>


                    </div>
                </div>
            </div>
        </main>

    ) 

}