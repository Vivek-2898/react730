import React from 'react'

export default function Child(props)
{
    console.log(props)
    return(
        <div>
            <p> {props.link}</p>
            <p> {props.name}</p>
        </div>
    )
}