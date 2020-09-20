import React from 'react';

import {withRouter} from 'react-router-dom';

import SearchBox from '../../components/searchBox/searchBox';
import Movie from '../../Movies/Movie/Movie';
import Pagination from '../../pagination/pagination';
import Navbar from '../../components/Navbar/Navbar';

import './movieLayout.css';

const MovieLayout = props => {
    console.log(props,'moviesLayout')
    const {
        typeSelector,
        onChangeHandler,
        onSearchHandler,
        movies,
        setFav,
        fav,
        totalResults,   
        currentPageData 
        } = props;

    return (
        <div>
            <SearchBox 
                    typeSelector={typeSelector} 
                    onChangeHandler={onChangeHandler}
                    onSearchHandler={onSearchHandler}
                />
            {movies ? <Movie movies={movies} 
                                    setFav={setFav}
                                    fav={fav} 
                                    /> : <h1 className="animate-flicker">
                                        Search Movies, Series and Episodes...
                                         </h1>}
            <Pagination 
                    totalResults={totalResults} 
                    currentPageData={currentPageData}
                />

        </div>
    )
}

export default withRouter(MovieLayout);