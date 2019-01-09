import React from 'react'
import '../sass/main.scss'

const Card = props => {
    let day, hours, temp, minTemp, maxTemp
    let options = { weekday: 'long' }

    day = new Date(props.item.dt_txt)
    hours = new Date().getHours()
    day = new Intl.DateTimeFormat('en-US', options).format(day)

    temp = Math.round(props.item.main.temp - 273,15)
    minTemp = Math.round(props.item.main.temp_min - 273,15)
    maxTemp = Math.round(props.item.main.temp_max - 273,15)

    return (
        <div className="card">
            <h2 className="card__title">{day}</h2>
            <h2 className="card__title">{temp}º</h2>

            <figure className="card__img">
                <img 
                    src={
                        hours > 18 && hours < 6 
                        ? "img/icons/" + props.item.weather[0].main + "-night.png"
                        : "img/icons/" + props.item.weather[0].main + ".png"
                    } 
                    className="card__img"
                />
            </figure>
            <div className="card__temperature">
                <p className="card__temperature--min">{minTemp}º</p>
                <p className="card__temperature--max">{maxTemp}º</p>
            </div>
        </div>
    )
}

export default Card