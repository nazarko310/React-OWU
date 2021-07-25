import './User.css'
import {Link} from "react-router-dom";

export default function User({item, url}) {
    return (
        <div className='user'>
            {item.id}. {item.name}
            <div className='user__inner'>
                <div className='user__link'>
                    <Link to={
                        {
                            pathname: `${url}/${item.id}`,
                            state: item
                        }
                    }>UserDetails</Link>
                </div>
                <div className='user__link'>
                    <Link to={`${url}/${item.id}/albums`}>AlbumsOfUser</Link>
                </div>
            </div>
        </div>
    )
}