import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom"

export const UserDetails = () => {
    const {userid} = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${userid}`)
    }, [])

    if(false) { // contextapi
        //take user to login page!

        return <Navigate to={"/login"} />
    }

    return <div>user of id: {userid}</div>
}