import User from "../components/User"
import { Fragment } from "react";
import { useSelector } from "react-redux";
export default function ListUsers () {
    const users = useSelector((state) => state.users );
    const MAX = Object.keys(users).length;
    let usersArray = Object.values(users); 

    for (let i = 0; i < MAX ; i++) {
        for (let j = i + 1; j < MAX ; j++) {
            const pointsI = Object.keys(usersArray[i].answers).length + Object.keys(usersArray[i].questions).length;
            const pointsJ = Object.keys(usersArray[j].answers).length + Object.keys(usersArray[j].questions).length;
            if(pointsI < pointsJ){
                let temp = {}; 
                temp = usersArray[i]; 
                usersArray[i] = usersArray[j]; 
                usersArray[j] = temp; 
            }
        }
    }
    return (
        <Fragment>
            {
                usersArray.map((u) => {
                return <User key={u.id} user={u} /> 
            })
            }
        </Fragment>
        ) 

}