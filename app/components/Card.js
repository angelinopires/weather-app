import React, { Component } from 'react'

function Card(props) {
    return (
        <div className="card">
            <h1 className="card__title">{props.item.dt_txt}</h1>
            <img src="#" className="card__img"/>
            <p className="card__max-temperature">30</p>
            <p className="card__min-temperature">15</p>
        </div>
    )
}

export default Card