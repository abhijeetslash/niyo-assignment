import React from 'react';

import {Route} from 'react-router-dom';

import Movie from './Movie/Movie';
import SearchBox from '../components/searchBox/searchBox';
import Favourites from '../pages/Favourites/Favourites';

const favourites = [];

class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies:[],
            s:'',
            type: '',
            fav: []
        }
    }

    onSearchHandler = (event) => {
        event.preventDefault();
        fetch(`http://www.omdbapi.com/?apikey=406f1bed&s=${this.state.s}&type=${this.state.type}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                movies: data.Search
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


    render(){

        const {movies} = this.state;

        return(
            <div>
                <SearchBox 
                    typeSelector={this.typeSelector} 
                    onChangeHandler={this.onChangeHandler}
                    onSearchHandler={this.onSearchHandler}
                />
                {movies ? <Movie movies={this.state.movies} 
                                    setFav={this.setFav}
                                    fav={this.state.fav} 
                                    /> :''}
                
                <Route path='/favourites' exact render={(props) => {
                    return <Favourites fav={this.state.fav} {...props}/>
                }}/>

            </div>
        )
    }
}

export default Movies;