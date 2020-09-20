import React from 'react';

import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';

import Movie from './Movie/Movie';
import SearchBox from '../components/searchBox/searchBox';
import Favourites from '../pages/Favourites/Favourites';
import Pagination from '../pagination/pagination';
import MovieLayout from '../pages/movieLayout/movieLayout';
import Navbar from '../components/Navbar/Navbar';

const favourites = [];

class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies:[],
            totalResults: null,
            s:'',
            type: 'movie',
            fav: []
        }
    }

    onSearchHandler = (event) => {
        event.preventDefault();
        fetch(`http://www.omdbapi.com/?apikey=406f1bed&s=${this.state.s}&type=${this.state.type}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                movies: data.Search,
                totalResults: data.totalResults
            });
        })
    }

    onChangeHandler = event => {
        this.setState({
            s: event.target.value
        });
    }

    typeSelector = (event) => {
        this.setState({
            type: event.target.value
        });
    }

    setFav = (key, event) => {

        const favourite = this.state.movies.find(movie => {
            return movie.imdbID === key;
        })

        favourites.push(favourite);
        console.log(favourites,'dekho yaha');

        this.setState({
            fav: favourites
        });
    }

    currentPageData = (page, event) => {
        fetch(`http://www.omdbapi.com/?apikey=406f1bed&s=${this.state.s}&type=${this.state.type}&page=${`${page}`}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                movies: data.Search
            });
        })
    }

    render(){

        const {movies} = this.state;

        return(
                <BrowserRouter>
                    <Navbar />
                    <Route path='/' exact render={
                            props => {
                                return (
                                    <MovieLayout
                                        typeSelector={this.typeSelector} 
                                        onChangeHandler={this.onChangeHandler}
                                        onSearchHandler={this.onSearchHandler}
                                        movies={this.state.movies} 
                                        setFav={this.setFav}
                                        fav={this.state.fav}
                                        totalResults={this.state.totalResults} 
                                        currentPageData={this.currentPageData}
                                        {...props}
                                    />
                                )
                            }
                        }/>
                    <Route path='/favourites' render={(props) => {
                            return <Favourites fav={this.state.fav}
                                               genere={this.state.type}     
                                                 {...props}
                            />
                        }}/> 
                </BrowserRouter>
        )
    }
}

export default Movies;
