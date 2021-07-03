import {useEffect, useState} from "react";
import {getComments} from "../../services/Api";
import Comment from "../comment/Comment";

export default function Comments() {
    let [commentsList, setCommentsList] = useState([]);
    useEffect(() => {
        getComments().then(response => setCommentsList(response.data))
    }, [])
    return (
        <div>
            {
                commentsList && <Comment item={commentsList}/>
            }
        </div>
    )
}