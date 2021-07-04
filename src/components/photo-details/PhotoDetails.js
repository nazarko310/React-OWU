import {useEffect, useState} from "react";
import {getPhotoFromAlbums} from "../../services/Api";

export default function PhotoDetails({match: {params: {id}}}) {

    const [photoDetails, setPhotoDetails] = useState([]);
    useEffect(() => {
        getPhotoFromAlbums(id).then(({data}) => setPhotoDetails(data))
    }, [id])
    return (
        <div>
            {
                photoDetails.map(value =>
                        <img key={value.id} src={value.url} alt={value.title}/>
                )
            }
        </div>
    )
}