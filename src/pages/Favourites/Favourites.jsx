import React from 'react';

import {withRouter} from 'react-router-dom';

import MovieCard from '../../Movies/movieCard/movieCard';

const Favourites = props => {
    console.log(props,'favouratietes to check routes')
    const {fav} = props;

    if(fav.length === 0){
        return ''
    }

    const filteredFav = fav.filter((eachFav,index) => {
        return fav.indexOf(eachFav) === index;
    });

    return (
           <div>
            <h2>{`Favourite ${props.genere === 'series' ? props.genere : `${props.genere}s` }`}</h2>
            {
                filteredFav.map((fav) => {
                        return (
                            <MovieCard 
                                key={fav.imdbID}
                                imdbID={fav.imdbID}
                                Title={fav.Title}
                                Year={fav.Year}
                                Type={fav.Type}
                                Poster={fav.Poster}
                            />
                        )
                    })
            }
        </div> 
    )
}

export default withRouter(Favourites);