import {useEffect, useState} from "react";
import {getPostsFromUsers} from "../../services/Api";
import PostDetail from "../post-detail/PostDetail";

export default function PostDetails({match: {params: {id}}}) {
    const [postDetails, setPostDetails] = useState([]);
    useEffect(() => {
        getPostsFromUsers(id).then(({data}) => {
                setPostDetails(data)
            }
        )
    }, [id])
    return (
        <div>
            <h2>Пости від юзера</h2>
            {
                postDetails.map(value =>
                    <div key={value.id}>
                        {
                            value && <PostDetail item={value}/>
                        }
                    </div>)
            }
        </div>
    )
}