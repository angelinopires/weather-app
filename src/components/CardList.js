import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
    constructor() {
        super()
        this.state = {
            weather: {
                list: [],
                city: ''
            },
            days: []
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(location => {
            const lat = location.coords.latitude
            const lon = location.coords.longitude
            let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=6a19c8fbc463b9423a455d519b4ab365`

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw response.statusText
                    }
                    return response.json()
                })
                .then(data => {
                    this.setState({
                        weather: data,
                        days: data.list.map(day => day.dt_txt),
                    })
                })
                .catch(error => console.log(error)) 
        })  
    }

    render() {
        let lastDay 
        
        const newArray = this.state.weather.list.map((item, index) => {
            if (!item.dt_txt.includes(lastDay)) {
                console.log(item)
                lastDay = item.dt_txt.slice(0, 10)
                return <Card key={index} item={item}/>
            }
        })
        return (
            <div className="card-list">
                <h1 className="card__title--city">{this.state.weather.city.name}</h1>
                {newArray}
            </div>
        )
    }
}

export default CardList