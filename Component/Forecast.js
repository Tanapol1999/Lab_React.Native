  
import React from 'react'
import { View, Text , StyleSheet, ImageBackground  } from 'react-native'

export default function Forecast(props) {

    let img = ""
    switch(props.main){
        case 'Rain': img=require('../picture/Rainy.jpg')
            break;
        case 'Clouds': img = require('../picture/Clouds.jpg')
            break;
    }

    return (
        <View>
                <Text style={styles.nameText}>{props.name}</Text>
                <Text style={styles.tempText}>{props.temp} °C</Text>
                <Text style={styles.mainText}>{props.main} </Text>
                <Text style={styles.descriptionText}>{props.description}</Text>
                <Text style={styles.maxminText}>Max Temperature: {props.maxtemp}°C</Text>
                <Text style={styles.maxminText}>Min Temperature: {props.mintemp}°C</Text>
                <Text style={styles.maxminText}>Pressure: {props.pressure} N/m²</Text>
                <Text style={styles.humidityText}>Humidity: {props.humidity}%</Text>
        </View>
    )
}

const styles = StyleSheet.create ({

    nameText: {
        paddingTop: 25,
        color: 'white',
        textAlign: 'center',
        fontSize: 50,
        fontWeight: "bold",
    },

    mainText: {
        paddingTop: 25,
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold"
    },
    descriptionText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    tempText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: "bold"
    },
    maxminText: {
        paddingTop: 25,
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    humidityText: {
        paddingTop: 25,
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }

})