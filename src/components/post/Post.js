import {Link} from "react-router-dom";

export default function Post({item, url}) {
    return (
        <div>
            {
                item.map(value =>
                    <div key={value.id}>
                        {value.id} - {value.title}
                        <Link to={`${url}/${value.id}/comments`}>Коменти</Link>
                    </div>
                )
            }
        </div>
    )
}