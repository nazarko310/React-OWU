import './Users.css'
import {useEffect, useState} from "react";
import {getUser} from "../../services/Api";
import User from "../user/User";
import UserDetails from "../user-details/UserDetails";
import {Route} from "react-router-dom";
import AlbumsOfUser from "../albums-of-user/AlbumsOfUser";

export default function Users({match: {url}}) {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUser().then(response => setUser(response.data))
    }, [])
    return (
        <div>
            <div className='users'>

                {
                    user.map(value => <User item={value} url={url} key={value.id}/>)
                }
            </div>
            <Route exact path={'/users/:id'} component={UserDetails}/>
            <Route path={'/users/:id/albums'} component={AlbumsOfUser}/>

        </div>
    )
}