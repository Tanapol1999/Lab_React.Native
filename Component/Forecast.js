  
import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.nameText}>{props.name}</Text>
            <Text style={styles.mainText}>{props.main} </Text>
            <Text style={styles.descriptionText}>{props.description}</Text>
            <Text style={styles.tempText}>{props.temp} °C</Text>
            <Text style={styles.maxminText}>Max Temperature: {props.maxtemp}°C</Text>
            <Text style={styles.maxminText}>Min Temperature: {props.mintemp}°C</Text>
            <Text style={styles.humidityText}>Humidity: {props.humidity}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({

    nameText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
    },

    mainText: {
        fontSize: 30,
        color: 'white',
        paddingTop: 25,
        textAlign: 'center',
    },
    descriptionText: {
        fontSize: 20,
        color: 'white',
        paddingTop: 30,
        textAlign: 'center',
        
    },
    tempText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    },
    maxminText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    humidityText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    celsiusText: {
        fontSize: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
    },
    set: {
        flexDirection: 'row',
        padding: 30,
    }
})