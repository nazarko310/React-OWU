import {useEffect, useState} from "react";
import {getAlbumsFromUser} from "../../services/Api";

export default function AlbumsDetails({match: {params: {id}}}) {
    const [postDetails, setPostDetails] = useState([]);
    useEffect(() => {
        getAlbumsFromUser(id).then(({data}) => {
                setPostDetails(data)
            }
        )
    }, [id])
    return (
        <div>
            <h2>Альбоми Юзера</h2>
            {
                postDetails.map(value =>
                    <div key={value.id}>
                        {value.title}
                    </div>)
            }
        </div>
    )
}
