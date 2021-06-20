import React from 'react'

function Colors(WrappedComponent) {
    const colors = ['red','pink','blue','gray','green']
    const randomColors = colors[Math.floor(Math.random()*5)]
    const classs = randomColors+'-text'
    return (props) => {
        return(
            <div className={classs}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Colors
