import React from 'react'
import { useState } from 'react'

function Temperature({temp}){
    return (
        <div className="Temperature-Container">
            <span className="Temperature">{temp}°C</span>
        </div>
    )
}

export default Temperature