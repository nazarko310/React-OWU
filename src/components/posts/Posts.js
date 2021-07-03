import {useEffect, useState} from "react";
import {getPosts} from "../../services/Api";
import Post from "../post/Post";

export default function Posts() {
    let [postsList, setPostsList] = useState([]);
    useEffect(() => {
        getPosts().then(response => setPostsList(response.data))
    }, [])

    return (
        <div>
            {
                postsList && <Post item={postsList}/>
            }
        </div>
    )
}