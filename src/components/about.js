import React from 'react'
import Colors from '../higher-order-components/colors'

function About(props) {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>This is aboutpage</p>
        </div>
    )
}

export default Colors(About)
