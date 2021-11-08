import '../style/header.css';
import {Link} from "react-router-dom"

export default function Header () {

    return (
        <header > 
            <div className="container">
                <div className="row"> 
                    <div className="logo"> 
                        <strong >Would You Rather?</strong>
                    </div>
                    <div className="user"> 
                        <Link to="/login" >Log In</Link>
                    </div>
                </div> 
            </div> 
        </header> 
    ) 

}