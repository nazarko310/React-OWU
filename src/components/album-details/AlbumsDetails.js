import {useEffect, useState} from "react";
import {getAlbumsFromUser} from "../../services/Api";

export default function AlbumsDetails({match: {params: {id}}}) {
    console.log(id);
    const [albumDetails, setAlbumsDetails] = useState([]);
    useEffect(() => {
        getAlbumsFromUser(id).then(response => setAlbumsDetails(response.data))
    }, [id])
    return (
        <div>
            {
                albumDetails.map(value =>
                    <div key={value.id}>
                        <p>{value.title}</p>
                    </div>)
            }
        </div>
    )
}