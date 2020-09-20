import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './Navbar.css';

const Navbar = props => {
    console.log(props,'from NAVBAR')
    return (
        <div className="nav">
            <FontAwesome className="fas fa-star" style={{marginRight:'5px', color:'yellow'}}/>
            <Link to='/favourites' className="nav-item">
                Favourites
            </Link>
        </div>
    )
        
}

export default Navbar;