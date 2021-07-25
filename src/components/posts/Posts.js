import {useEffect, useState} from "react";
import {getPosts} from "../../services/Api";
import Post from "../post/Post";
import {Route} from "react-router-dom";
import PostDetails from "../post_details/PostDetails";
import CommentsOfPost from "../comments-of-post/CommentsOfPost";

export default function Posts({match: {url}}) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(response => setPosts(response.data))
    }, [])
    return (
        <div>
            {
                posts.map(value => <Post item={value} url={url} key={value.id}/>)
            }
            <br/>
            <Route path={'/posts/:id'} component={PostDetails}/>
            <br/>
            <Route path={'/posts/:id/comments'} component={CommentsOfPost}/>
        </div>
    )
}