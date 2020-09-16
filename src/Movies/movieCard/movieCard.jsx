import React, {useState} from 'react';

const MovieCard = props => {

    const [favToggle, setfavToggle] = useState(true);

    return (
        <div>
            <img src="" alt="image"/>
            <h3>{props.Title}</h3>
            <div>{props.Year}</div>
            <div>{props.Type}</div>
            <div onClick={() => {
                if(favToggle){
                    return props.setFav(props.imdbID)
                }
                }
                }>
                <div onClick={() => setfavToggle(!favToggle)}>{favToggle ? 'Unfav':'fav'}</div>
            </div>
        </div>
    )
}

export default MovieCard;