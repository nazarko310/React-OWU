import './User.css'

export default function User({item: {name, email, id}, getAlbums}) {
    return (
        <div className='user__inner'>
            <div className='user__content'>
                <p className='user__name'>{name}</p>
                <p className='user__email'>{email}</p>
                <button className='user__button' onClick={() => {
                    getAlbums(id)
                }}>
                    Альбоми
                </button>
            </div>
        </div>
    )
}