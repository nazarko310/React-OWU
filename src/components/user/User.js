import {Link} from "react-router-dom";

export default function User({item, url}) {
    return (
        <div>
            {item.id} - {item.name} - {item.username}
            <Link to={`${url}/${item.id}/albums`}>Albums</Link>
        </div>
    )
}