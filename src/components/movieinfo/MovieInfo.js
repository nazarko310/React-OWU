import './MovieInfo.css'

export default function MovieInfo({item}) {
    return (
        <div>
            <h3 className='movie__block_title'>
                {item.title}
            </h3>
            <div className='movie__block_inner'>
                <p>{item.original_language}</p>
                <p>{item.popularity}</p>
            </div>
            <p className='info'>
                {item.overview}
            </p>
        </div>
    )
}