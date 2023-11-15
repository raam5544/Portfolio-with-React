import React from 'react'

function Contact(props) {
    return (
        <div>
            <div>{props.contEmail}</div>
            <div>{props.contPhone}</div>
            <div>{props.contAddress}</div>
        </div>
    )
}

export default Contact