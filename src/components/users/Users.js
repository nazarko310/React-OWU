import {useEffect, useState} from "react";
import {getUsers} from "../../services/Api";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserDetails from "../user_details/UserDetails";
import PostsOfUser from "../posts-of-user/PostsOfUser";

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
            <br/>
            <Route exact path={'/users/:id'} component={UserDetails}/>
            <br/>
            <Route path={'/users/:id/posts'} component={PostsOfUser}/>
        </div>
    )
}