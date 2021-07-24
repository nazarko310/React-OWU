import {useEffect, useState} from "react";

export default function PostDetails({location: {state}}) {
    const [postDetails, setPostDetails] = useState([]);
    useEffect(() => {
        setPostDetails({...state})
    }, [state])

    return (
        <div>
            {postDetails.id}. {postDetails.body}
        </div>
    )
}