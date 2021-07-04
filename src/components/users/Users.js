import {useEffect, useState} from "react";
import {getUsers} from "../../services/Api";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import AlbumsDetails from "../albums-details/AlbumsDetails";


export default function Users({match: {url}}) {
    const [usersList, setUsersList] = useState([]);
    useEffect(() => {
        getUsers().then(response => setUsersList(response.data))
    }, [])
    return (
        <div>
            {
                usersList.map(value =>
                    <User key={value.id} item={value} url={url}/>
                )
            }
            <Switch>
                <Route path={'/users/:id/albums'} component={AlbumsDetails}/>
            </Switch>
        </div>
    )
}