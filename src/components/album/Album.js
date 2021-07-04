import {Link} from "react-router-dom";
export default function Album({item, url}){
    return(
        <div>
            {item.id} - {item.title}
            <Link to={`${url}/${item.id}/photos`}>Photos</Link>
        </div>
    )
 }