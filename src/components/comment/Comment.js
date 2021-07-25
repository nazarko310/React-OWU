import {Link} from "react-router-dom";

export default function Comment({item, url}) {

    return (
        <div>
            {item.id}. {item.email}: {item.body}
            <Link to={{
                pathname: `${url}/${item.id}`,
                state: item
            }}>CommentDetails</Link>
        </div>
    )
}