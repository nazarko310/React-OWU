import {useEffect, useState} from "react";
import {getAlbums} from "../../services/Api";
import Album from "../album/Album";

export default function Albums({match: {url}}) {
    const [albumsList, setAlbumsList] = useState([]);
    useEffect(() => {
        getAlbums().then(response => setAlbumsList(response.data))
    }, [])

    return (
        <div>
            {
                albumsList.map(value => <Album item={value} url={url} key={value.id}/>)
            }
        </div>
    )
}