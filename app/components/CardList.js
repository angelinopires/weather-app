import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
    constructor() {
        super()
        this.state = {
            weather: {
                list: []
            }
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(location => {
            const lat = location.coords.latitude
            const lon = location.coords.longitude
            let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=6a19c8fbc463b9423a455d519b4ab365`
            console.log(url)

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw response.statusText
                    }
                    return response.json()
                })
                .then(data => {
                    this.setState({
                        weather: data
                    })
                })
                .catch(error => console.log(error)) 
        })  
    }

    render() {
        console.log(this.state.weather.list)
        const newArray = this.state.weather.list.map((item, index) => {
            if (item.dt_txt.includes('00:00:00')) {
                console.log(item)
                return <Card key={index} item={item} />
            }
        })
        
        
        return (
            <div>
                {newArray}
            </div>
        )
    }
}

export default CardList