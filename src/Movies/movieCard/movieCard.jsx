import React, {useState, Fragment} from 'react';

import FontAwesome from 'react-fontawesome';

import './movieCard.css';

const fav = <Fragment>
                <FontAwesome className="fas fa-star" style={{marginRight:'5px', color:'yellow'}}/>
                Favourite
            </Fragment>
const Unfav = <Fragment>
                <FontAwesome className="fas fa-star" style={{marginRight:'5px', color:'grey'}}/>
                Unfavourite
              </Fragment>

const MovieCard = props => {

    const [favToggle, setfavToggle] = useState(true);
    console.log('poster link',props);

    return (
        <div className="movie-item">
            <div className="card">
                <div style={{width:'100%',height:'50%'}}>
                    <img src={`${props.Poster}`} alt=""/>
                </div>
                <div className="card-content">
                    <h3 className="title-style">{props.Title}</h3>
                    <div style={{marginBottom:'4px'}}>Year:{props.Year}</div>
                    <div style={{marginBottom:'4px'}}>Genere:{props.Type}</div>
                    {
                       props.setFav && <div onClick={() => {
                        if(favToggle){
                            return props.setFav(props.imdbID)
                        }
                        }
                        }>
                        <div 
                            onClick={() => setfavToggle(!favToggle)}>{favToggle ? Unfav : fav}
                        </div>
                    </div> 
                    }
                </div>
                
            </div>
        </div>
    )
}

export default MovieCard;