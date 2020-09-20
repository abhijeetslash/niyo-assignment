import React from 'react';
import MovieCard from '../movieCard/movieCard';

import './Movie.css';

const Movie = ({movies, setFav, favKey}) => {
   
    return (
        <div className="cards">
            {movies.map((movie) => {
                return (
                    <MovieCard 
                        key={movie.imdbID}
                        imdbID={movie.imdbID}
                        Title={movie.Title}
                        Year={movie.Year}
                        Type={movie.Type}
                        Poster={movie.Poster}
                        setFav={setFav}
                    />
                )  
            })}
        </div>
    )
}

export default Movie;