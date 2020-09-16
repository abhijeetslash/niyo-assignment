import React from 'react';

const searchBox = props => {
    const Types = ['All','movie','series','episode'];
    
    return (
        <form onSubmit={props.onSearchHandler}>
            <input type="text" onChange={props.onChangeHandler}/>
            <select name="Types" id="" onClick={props.typeSelector}>
                {
                    Types.map((Type,id) => {
                        return <option key={id} value={`${Type}`}>
                                    {Type}
                                </option>
                    })
                }
            </select>
            <button type="submit">Search</button>
        </form>
    )
}

export default searchBox;