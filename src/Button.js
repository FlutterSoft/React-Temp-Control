import React from 'react'

function Button( {message, color, handleClick} ){
    return(
        <button 
            className="Button"
            onClick={handleClick}
            style={ {color: color}}
        >
            {message}
        </button>
    )
}

export default Button