import './PosterPreview.css'

export default function PosterPreview({url, alt}) {
    return (
        <div className='poster-preview'>
            <img src={`https://image.tmdb.org/t/p/w500${url}`} alt={alt}/>
        </div>
    )
}