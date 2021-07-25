import {Link} from "react-router-dom";

export default function Post({item, url}) {
    return (
        <div>
            {item.id}. {item.title}
            <Link to={
                {
                    pathname: `${url}/${item.id}`,
                    state: item
                }
            }>PostDetails</Link>
            <Link to={`${url}/${item.id}/comments`}>CommentsFromPost</Link>
            <br/>

        </div>
    )
}