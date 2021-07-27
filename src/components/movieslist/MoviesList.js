import {useEffect, useState} from "react";
import {getMovie} from "../../services/Api";
import MoviesListCard from "../movieslistcard/MoviesListCard";
import './MovieList.css'

export default function MoviesList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovie().then(response => setMovies(response.data.results))
    }, [])
    return (
        <div className='movies__inner'>
            {
                movies.map(value => <MoviesListCard item={value} key={value.id}/>)
            }
        </div>
    )
}