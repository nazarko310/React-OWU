import {useEffect, useState} from "react";
import {getComments} from "../../services/Api";
import Comment from "../comment/Comment";
import {Route} from "react-router-dom";
import CommentDetails from "../comment_details/CommentDetails";

export default function Comments({match: {url}}) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(response => setComments(response.data))
    }, [])
    return (
        <div>
            {
                comments.map(value => <Comment item={value} url={url} key={value.id}/>)
            }
            <Route path={'/comments/:id'} component={CommentDetails}/>
        </div>
    )
}