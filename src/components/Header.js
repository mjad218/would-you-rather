import '../style/header.css';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';

export default function Header () {
    const loggedinUser = useSelector( (state) => state.currentUser );
    const users = useSelector( (state) => state.users );
    let user = Object.values(users).filter(u => u.id === loggedinUser.LoggedInReducer);
    user = user["0"]
    console.log(user); 
    return (
        <header > 
            <div className="container">
                <div className="row"> 
                    <div className="logo"> 
                        <strong >Would You Rather?</strong>
                    </div>
                    {loggedinUser.LoggedInReducer ? 
                    <div className="user"> 
                    <img alt={user.name} className="image" src={user.avatarURL}/>
                    <div> 
                        <span> 
                            Welcome! 
                        </span>
                        <strong> 
                            {user.name}
                        </strong>
                    </div>
                    </div>
                    : <Link to="/login" >Log In</Link>}
                        
                </div> 
            </div> 
        </header> 
    ) 

}