import {useEffect, useState} from "react";
import {getPostsFromUsers} from "../../services/Api";

export default function PostsOfUser({match: {params: {id}}}) {
    const [postsOfUser, setPostsOfUser] = useState([]);
    useEffect(() => {
        getPostsFromUsers(id).then(response => setPostsOfUser(response.data))
    }, [id])
    return (
        <div>
            {
                postsOfUser.map(value =>
                    <div key={value.id}>
                        {value.id}. {value.title}
                    </div>
                )
            }
        </div>
    )
}