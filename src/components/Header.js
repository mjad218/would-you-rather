import '../style/header.css';
import {Link} from "react-router-dom"
import {login} from "../redux/actions/login"
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

export default function Header () {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const loggedinUser = useSelector( (state) => state.currentUser );

    const handleLogout = () => {
        dispatch(login({id : 0, name:"", avatarURL : "" , answers : "" , questions : ""}));
        navigate("/login"); 
    }
    return (
        <header > 
            <div className="container">
                <div className="row"> 
                    <div className="logo"> 
                        <strong >Would You Rather?</strong>
                    </div>
                    {loggedinUser.id ? 
                    <div className="user"> 
                    <img alt={loggedinUser.name} className="image" src={loggedinUser.avatarURL}/>
                    <div> 
                        <span> 
                            Welcome! 
                        </span>
                        <strong> 
                            {loggedinUser.name}
                        </strong>
                    </div>
                    <div className="logout" > 
                        <span onClick={ () => handleLogout()}> Log Out</span>
                    </div>
                    </div>
                    : <Link to="/login" >Log In</Link>}
                        
                </div> 
            </div> 
        </header> 
    ) 

}