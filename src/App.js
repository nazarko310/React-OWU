import {useEffect, useState} from "react";
import {getPost, getPosts} from "./services/Api";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/post-details/PostDetails";

function App() {
    let [postsList, setPostsList] = useState([]);
    let [postDetails, setPostDetails] = useState(null);
    useEffect(() => {
        getPosts().then(response => setPostsList(response.data))
    }, [])

    function selectPost(id) {
        getPost(id).then(({data}) => {
            // console.log(data)
            setPostDetails(data);
        })
    }

    return (
        <div>
            <Posts items={postsList} selectPost={selectPost}/>
            {
                postDetails && <PostDetails text={postDetails}/>
            }
        </div>
    )
}

export default App;

