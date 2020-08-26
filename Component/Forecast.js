  
import React from 'react'
import { View, Text , StyleSheet, ImageBackground  } from 'react-native'

export default function Forecast(props) {

    let img = " "
    if(props.main == 'Rain'){
        console.log("Rain Weather");
        img = require('../picture/Rainy.jpg');
    }
    else if(props.main == 'Clouds'){
        console.log("Clouds Weather");
        img = require('../picture/Clouds.jpg');
    }else if(props.main == 'Clear'){
        console.log("Clear Weather");
        img = require('../picture/Clear.jpg');
    }else if(props.main == 'Sunny'){
        console.log("Sunny Weather");
        img = require('../picture/Sunny.jpg');
    }else if(props.main == 'Thunderstorm'){
        console.log("Thunderstorm Weather");
        img = require('../picture/Thunderstorm.jpg');
    }else{
        console.log("What?");
        img = require('../picture/weather.png');
    }

    return (
        <ImageBackground source = {img} style = {styles.backdrop}>
            <View style = {styles.viewstyle}>
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
          </View>
        </ImageBackground>
      
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
    },
    backdrop: {
        alignItems : 'center',
        width : '100%' ,
        height : '100%',
    },
    viewstyle: {
        width: 400, 
        height: '94%', 
        backgroundColor: 'black',
        opacity : 0.60,
        top: 20,
    },
    
})