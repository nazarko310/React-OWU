import {Link} from "react-router-dom";
export default function User({item, url}) {
    return (
        <div>
            {
                item.map(value =>
                    <div key={value.id}>
                        {value.id} - {value.name}
                        <Link to={`${url}/${value.id}/albums`}>Albums</Link>
                    </div>
                )}
        </div>
    )
}