import React from 'react';

const Favourites = props => {
    console.log(props.fav,'favorites seee')
    const {fav} = props;

    const filteredFav = fav.filter((eachFav,index) => {
        return fav.indexOf(eachFav) === index;
    });

    return (
        <div>
            <h2>FAVAORITES</h2>
            {
                filteredFav && filteredFav.map((fav,index) => {
                        return (
                            <div key={index}>
                                
                                <img src="" alt="image"/>
                                <h3>{fav.Title}</h3>
                                <div>{fav.Year}</div>
                                <div>{fav.Type}</div>
                            </div>
                        )
                    })
            }
        </div>
        
    )
}

export default Favourites;