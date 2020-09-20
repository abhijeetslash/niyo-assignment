import React from 'react';

import FontAwesome from 'react-fontawesome';

import './searchBox.css';

const searchBox = props => {
    const Types = ['movie','series','episode'];
    
    return (
        
            <form onSubmit={props.onSearchHandler} className="container">
                <div style={{position:'relative', width:"40%"}}>
                    <FontAwesome 
                        className="fa fa-search" 
                        style={{fontSize:'23px', position:'absolute',top:'50%',left:'3.5%', color:'rgba(26, 117, 255, .5)',transform:'translate(0%,-50%)'}}
                    />
                    <input type="text" 
                        onChange={props.onChangeHandler}
                        className="styled-input"
                    />
                </div>
                
                <select name="Types" id="" onClick={props.typeSelector} className="custom-select">
                {
                    Types.map((Type,id) => {
                        return <option key={id} value={`${Type}`}>
                                    {Type}
                                </option>
                    })
                }
                </select>
                <button type="submit" className="button button1">Search</button>
            </form> 
        
        
    )
}

export default searchBox;