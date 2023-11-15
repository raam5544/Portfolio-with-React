import React from 'react'

function Buttons(props) {
    return (
        <button onClick={props.toggleWorkHistory}>
            {props.icon}
            Click Me to change work History
        </button>
    )
}

export default Buttons