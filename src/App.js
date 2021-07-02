import {useEffect, useState} from "react";
import {getCommentsFromPosts, getPostsFromUser, getUsers} from "./services/Api";
import Users from "./components/users/Users";
import PostDetails from "./components/post-details/PostDetails";
import CommentsDetails from "./components/comment-details/CommentsDetails";

function App() {
    let [usersList, setUserLis] = useState([]);
    let [postsList, setPostsList] = useState([]);
    let [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        getUsers().then(response => setUserLis(response.data))
    })

    function showPosts(id) {
        getPostsFromUser(id).then(({data}) => {
            setPostsList(data)
        })
    }

    function showComments(id) {
        getCommentsFromPosts(id).then(({data}) => {
            setCommentsList(data)
        })
    }

    return (
        <div>
            <Users items={usersList} showPosts={showPosts}/>
            {
                postsList && <PostDetails post={postsList} showComments={showComments}/>
            }
            <hr/>
            {
                commentsList && <CommentsDetails comments={commentsList}/>
            }
        </div>
    )
}

export default App;

