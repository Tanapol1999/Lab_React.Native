import React, { useState , useEffect } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast'


export default function Weather(props) {    
    
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=d09aea7844128af0f3d9f4413d828425`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    name: json.name,
                    humidity: json.main.humidity,
                    maxtemp: json.main.temp_max,
                    mintemp: json.main.temp_min,
                    pressure: json.main.pressure
                });
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    return (
        <View >
            <Forecast {...forecastInfo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    zipCodeText: {
        paddingTop: 20,
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    background: {
        backgroundColor: 'black',
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.60,
        width: '100%',
        height: '50%'
    }
})