import {useEffect, useState} from "react";
import {getUsers} from "../../services/Api";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserDetails from "../user_details/UserDetails";

export default function Users({match: {url}}) {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers().then(response => setUser(response.data))
    }, [])

    return (
        <div>
            {
                user.map(value => <User item={value} key={value.id} url={url}/>)
            }
            <Route path={'/users/:id'} component={UserDetails}/>
        </div>
    )
}