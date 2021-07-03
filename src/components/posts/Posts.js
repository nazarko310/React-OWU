import {useEffect, useState} from "react";
import {getPosts} from "../../services/Api";
import Post from "../post/Post";
import {Route, Switch} from "react-router-dom";
import CommentDetails from "../comment-details/CommentDetails";

export default function Posts({match: {url}}) {
    const [postsList, setPostsList] = useState([]);
    useEffect(() => {
        getPosts().then(response => setPostsList(response.data))
    }, [])
    return (
        <div>
            {
                postsList && <Post item={postsList} url={url}/>
            }
            <br/>
            <Switch>
                <Route path={'/posts/:id/comments'} component={CommentDetails}/>
            </Switch>
        </div>
    )
}