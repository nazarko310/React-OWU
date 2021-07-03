import {useEffect, useState} from "react";
import {getCommentsFromPosts} from "../../services/Api";

export default function CommentDetails({match: {params: {id}}}) {
    const [commentDetails, setCommentDetails] = useState([]);
    useEffect(() => {
        getCommentsFromPosts(id).then(({data}) => setCommentDetails(data))
    }, [id])

    return (
        <div>
            {
                commentDetails.map(value =>
                    <div key={value.id}>
                        {
                            value && <div>{value.id} - {value.body}</div>
                        }
                    </div>
                )
            }
        </div>
    )
}
