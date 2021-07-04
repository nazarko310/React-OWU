import {useEffect, useState} from "react";
import {getUsers} from "../../services/Api";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import AlbumsDetails from "../album-details/AlbumsDetails";

export default function Users({match: {url}}) {
    const [usersList, setUsersList] = useState([]);
    useEffect(() => {
        getUsers().then(response => setUsersList(response.data))
    }, [])
    return (
        <div>
            {
                <User item={usersList} url={url}/>

            }
            <Switch>
                <Route path={'/users/:id/albums'}/>

            </Switch>
        </div>
    )
}