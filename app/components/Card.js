import React from 'react'

function Card(props) {
    let temp, minTemp, maxTemp

    temp = Math.round(props.item.main.temp - 273,15)
    minTemp = Math.round(props.item.main.temp_min - 273,15)
    maxTemp = Math.round(props.item.main.temp_max - 273,15)

    return (
        <div className="card">
            <h1 className="card__title">{temp}</h1>
            <img src="#" className="card__img"/>
            <p className="card__max-temperature">{maxTemp}</p>
            <p className="card__min-temperature">{minTemp}</p>
        </div>
    )
}

export default Card