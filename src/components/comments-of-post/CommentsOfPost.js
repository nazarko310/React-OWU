import {useEffect, useState} from "react";
import {getCommentsFromPost} from "../../services/Api";

export default function CommentsOfPost({match: {params: {id}}}) {
    const [commentsOfPost, setCommentsOfPost] = useState([]);
    useEffect(() => {
        getCommentsFromPost(id).then(response => setCommentsOfPost(response.data))
    }, [id])
    return (
        <div>
            {
                commentsOfPost.map(value =>
                    <div key={value.id}>
                        {value.id}. {value.email}: {value.body}
                    </div>
                )
            }
        </div>
    )
}