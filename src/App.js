import './App.css'
import MoviesList from "./components/movieslist/MoviesList";
import Header from "./components/header/Header";

export default function App() {

    return (
        <div className='container'>
            <Header/>
            <MoviesList/>
        </div>
    )
}