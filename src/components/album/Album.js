import {Link} from "react-router-dom";

export default function Album({item, url}) {
    return (
        <div>
            {
                item.map(value =>
                    <div key={value.id}>
                        {value.id} - {value.title}
                        <Link to={`${url}/${value.id}/photos`}>Photo</Link>
                    </div>
                )
            }
        </div>
    )
}