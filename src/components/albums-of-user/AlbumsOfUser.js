import {useEffect, useState} from "react";
import {getAlbumsOfUser} from "../../services/Api";

export default function AlbumsOfUser({match: {params: {id}}}) {
    const [albumsOfUser, setAlbumsOfUser] = useState([]);
    useEffect(() => {
        getAlbumsOfUser(id).then(response => setAlbumsOfUser(response.data))
    }, [id])
    return (
        <div>
            <h3>Albums of User</h3>
            {
                albumsOfUser.map(value =>
                    <div key={value.id}>
                        {value.id}. {value.title}
                    </div>)
            }
        </div>
    )
}