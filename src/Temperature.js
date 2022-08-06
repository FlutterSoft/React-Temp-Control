import React from 'react'

function Temperature({temp}){
    let colorTemp = "blue"
    if(temp < 0){
        colorTemp = "#80B3CF"
    }
    else if(temp < 11){
        colorTemp = "#2AAECC"
    }
    else if(temp < 18){
        colorTemp = "#2BCCB9"
    }
    else if(temp < 26){
        colorTemp = "#24a075"
    }
    else if(temp < 33){
        colorTemp = "#EDDE35"
    }
    else if(temp < 40){
        colorTemp = "#ED9134"
    }
    else if(temp >= 40){
        colorTemp = "#ED4434"
    }

    return (
        <div className="Temperature-Container">
            <span 
                className="Temperature"
                style={{backgroundColor:colorTemp}}
            >
                {temp}°C</span>
        </div>
    )
}

export default Temperature