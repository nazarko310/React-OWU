import {useEffect, useState} from "react";

export default function CommentDetails({location: {state}}) {
    const [commentDetails, setCommentDetails] = useState([]);
    useEffect(() => {
        setCommentDetails({...state})
    }, [state])
    return (
        <div>
            Name:{commentDetails.name}
        </div>
    )
}