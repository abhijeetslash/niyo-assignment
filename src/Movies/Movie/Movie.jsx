import React from 'react';
import MovieCard from '../movieCard/movieCard';

const Movie = ({movies, setFav, favKey}) => {
   
    return (
        <div>
            {movies.map((movie) => {
                return (
                    <MovieCard 
                        key={movie.imdbID}
                        imdbID={movie.imdbID}
                        Title={movie.Title}
                        Year={movie.Year}
                        Type={movie.Type}
                        setFav={setFav}
                    />
                )  
            })}
        </div>
    )
}

export default Movie;