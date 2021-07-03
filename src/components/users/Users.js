import {useEffect, useState} from "react";
import {getUsers} from "../../services/Api";
import User from "../user/User";

export default function Users() {
    let [usersList, setUsersList] = useState([]);
    useEffect(() => {
        getUsers().then(response => setUsersList(response.data))
    }, [])

    return (
        <div>
            {
                usersList && <User item={usersList}/>
            }
        </div>
    )
}