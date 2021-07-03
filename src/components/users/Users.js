import {Switch, Route} from "react-router-dom";

import {useEffect, useState} from "react";
import {getUsers} from "../../services/Api";
import User from "../user/User";
import PostDetails from "../post-details/PostDetails";

export default function Users({match: {url}}) {
    const [usersList, setUsersList] = useState([]);
    useEffect(() => {
        getUsers().then(response => setUsersList(response.data))
    }, [])
    return (
        <div>
            {
                usersList && <User item={usersList} url={url}/>
            }
            <br/>
            <Switch>
                <Route path={'/users/:id/posts'} component={PostDetails}/>
            </Switch>
        </div>
    )
}