import {useEffect, useState} from "react";
import {getAlbums} from "../../services/Api";
import Album from "../album/Album";
import {Route, Switch} from "react-router-dom";
import PhotoDetails from "../photo-details/PhotoDetails";

export default function Albums({match: {url}}) {
    const [albumsList, setAlbumsList] = useState([]);
    useEffect(() => {
        getAlbums().then(response => setAlbumsList(response.data))
    }, [])
    return (
        <div>
            {
                albumsList && <Album item={albumsList} url={url}/>
            }
            <Switch>
                <Route path={'/albums/:id/photos'} component={PhotoDetails}/>
            </Switch>
        </div>
    )
}