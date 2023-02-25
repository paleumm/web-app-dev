import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <button onClick={() => { props.callBack() }}>{props.text}</button >
    )
}

export default Button