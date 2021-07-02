import './Users.css'
import User from "../user/User";

export default function Users({items, getAlbums}) {
    return (
        <div className='users__inner'>
            {
                items.map(value => <User item={value} key={value.id} getAlbums={getAlbums}/>)
            }
        </div>
    )
}