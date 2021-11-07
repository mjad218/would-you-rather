import {NavLink} from "react-router-dom"

export default function NavBar () {

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <ul>
                        <li> 
                            <NavLink className={ (data) => data.isActive ? "active" : " "} to="/">Home</NavLink>
                        </li>
                        <li> 
                            <NavLink className={ (data) => data.isActive ? "active" : " "} to="/add">Post Question</NavLink>
                        </li>
                        <li> 
                            <NavLink className={ (data) => data.isActive ? "active" : " "} to="/leaderboard">Leaderboard</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    ) 

}