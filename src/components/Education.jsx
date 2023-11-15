import React from 'react'

function Education
    (props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <h3>Education Details :</h3>
            <div>{props.eduInfo[0]}</div>
            <div style={{ margin: '0px 15px' }}>{props.eduInfo[1]}</div>
            <div>{props.eduInfo[2]}</div>
        </div>
    )
}

export default Education
