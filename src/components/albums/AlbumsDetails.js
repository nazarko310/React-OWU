import './AlbumsDetails.css'

export default function AlbumsDetails({albums, getPhoto}) {
    return (
        <div>
            <h2 className='albums__title'>Lorem ipsum.</h2>
            <div className='albums__inner'>
                {
                    albums.map(value =>
                        <div className='albums__text' key={value.id}>
                            {value.id} - {value.title}
                            <br/>
                            <button className='albums__btn' onClick={() => {
                                getPhoto(value.id)
                            }}>Фото
                            </button>
                        </div>)
                }

            </div>
        </div>
    )
}