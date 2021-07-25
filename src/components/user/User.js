import {Link} from "react-router-dom";

export default function User({item, url}) {
    return (
        <div>
            {item.name}__{item.username}
            <Link to={
                {
                    pathname: `${url}/${item.id}`,
                    state: item
                }
            }>Details</Link>
            <Link to={`${url}/${item.id}/posts`}>PostsOfUser</Link>
        </div>
    )
}