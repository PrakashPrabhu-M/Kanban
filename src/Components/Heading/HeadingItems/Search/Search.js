import React from 'react';

import './Search.css';

const SearchBar=(props)=>{
    return (
        <input type='text' placeholder='search...' className='css-input' onChange={props.onChange} value={props.value} />
    );
}

export default SearchBar;