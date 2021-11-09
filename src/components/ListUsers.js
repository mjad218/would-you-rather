import User from "../components/User"
import { Fragment } from "react";
import { useSelector } from "react-redux";
export default function ListUsers () {
    const users = useSelector((state) => state.users );         
    return (
        <Fragment>
            {
                Object.values(users).map( (u) => {
                return <User key={u.id} user={u} /> 
            })
            }
        </Fragment>
        ) 

}