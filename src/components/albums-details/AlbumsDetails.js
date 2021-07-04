import {useEffect, useState} from "react";
import {getAlbumsFromUser} from "../../services/Api";
import AlbumDetail from "../album-detail/AlbumDetail";

export default function AlbumsDetails({match: {params: {id}}}) {
    const [albumsDetails, setAlbumsDetails] = useState([]);
    useEffect(() => {
        getAlbumsFromUser(id).then(({data}) =>
            setAlbumsDetails(data)
        )
    }, [id])
    return (
        <div>
            {
                albumsDetails.map(value =>
                    <AlbumDetail key={value.id} item={value}/>
                )
            }
        </div>
    )
}