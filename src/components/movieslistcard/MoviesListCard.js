import PosterPreview from "../posterpreview/PosterPreview";
import './MoviesListCard.css'
import MovieInfo from "../movieinfo/MovieInfo";

export default function MoviesListCard({item}) {
    return (
        <div className='movie__block'>
            <PosterPreview url={item.backdrop_path} alt={item.original_title} info={item.overview}/>
            <MovieInfo item={item}/>
        </div>
    )
}