import {useEffect, useState} from "react";
import {getPostsFromUsers} from "../../services/Api";

export default function PostDetails({match: {params: {id}}}) {
    const [postDetails, setPostDetails] = useState([]);
    useEffect(() => {
        getPostsFromUsers(id).then(({data}) => {
                setPostDetails(data)
            }
        )
    }, [id])
    return (
        <div>
            <h2>Пости від юзера</h2>
            {
                postDetails.map(value =>
                    <div key={value.id}>
                        {
                            value && <div>{value.id} - {value.body}</div>
                        }
                    </div>)
            }
        </div>
    )
}