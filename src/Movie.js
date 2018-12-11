import React from 'react';
import PropTypes from 'prop-types';

function Movies ({name, image, price, url,category}) {
    return(
        <div>
            <div>
                <div>{name}</div>
            </div>
            <div>
                <MoviePoster 
                    alt={name}
                    image={image}
                    name={name}
                />
            </div>
            <div>
                {category}
            </div>
            <div>
                <a href={url}>{name}</a>
            </div>
        </div>
    )
}


function MoviePoster({name,image}) {
    return(
        <img src={image} alt={name} />
    )
}



Movies.prototype = {
    name     : PropTypes.string.isRequired,
    image    : PropTypes.string.isRequired,
    category  : PropTypes.string.isRequired,
    url       : PropTypes.string.isRequired,
    
}

MoviePoster.prototype = {
    name     : PropTypes.string.isRequired,
    image    : PropTypes.string.isRequired,
}



export default Movies;