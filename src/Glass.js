import React from 'react';
import PropTypes from 'prop-types';




function Glass ({name, image, price, url,category}) {
    return(
        <div className="box">
            <div>
                <div>{name}</div>
            </div>
            <div>
                <GlassPoster 
                    alt={name}
                    image={image}
                    name={name}
                    price={price}
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


function GlassPoster({name,image}) {
    return(
        <img src={image} alt={name} width="200"/>
    )
}



Glass.prototype = {
    name     : PropTypes.string.isRequired,
    image    : PropTypes.string.isRequired,
    category  : PropTypes.string.isRequired,
    url       : PropTypes.string.isRequired,
    price     : PropTypes.number.isRequired
    
}

GlassPoster.prototype = {
    name     : PropTypes.string.isRequired,
    image    : PropTypes.string.isRequired,
}



export default Glass;