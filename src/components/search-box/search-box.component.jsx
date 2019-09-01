import React from 'react';

import './search-box.styles.css';

// functional components do not have access to the state because there is no access constructor,
// as well as lifecycle methods on app.js

// functional component gets some props and renders HTML

// always USE FC if you don't need state and lifecycle
 export const SearchBox = ( { placeholder, handleChange})    => (
    <input 
        className="search"
        type='search' 
        placeholder={ placeholder }
        onChange={ handleChange }
      />
)