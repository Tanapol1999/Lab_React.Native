import React from 'react'
import { FlatList, View , Text , StyleSheet, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110', src:require('../picture/HDY.jpg') },
    { place: 'Trang', code: '92000', src:require('../picture/TRG.jpg')},
    { place: 'Chiangmai', code: '50000', src:require('../picture/CNX.jpg') },
    { place: 'Khonkaen', code: '40000', src:require('../picture/KKN.jpg') },
    { place: 'Chonburi', code: '20000', src:require('../picture/CHB.jpg') },
    { place: 'Phang Nha', code: '82170', src:require('../picture/PHN.jpg') },
    { place: 'Bangkok', code: '10150', src:require('../picture/BKK.jpg') },
    { place: 'Phuket', code: '83120', src:require('../picture/PHK.jpg') },
]

const ZipItem = ({place, code, navigation, src}) => (
    <TouchableHighlight onPress={() => (
        navigation.navigate('Weather', {zipCode: code})
    )}>
        <View style={styles.zipItem}>
            <ImageBackground source={src} style={styles.backpic}>
                <Text style = {styles.placeText}>{place}</Text>
                <Text style = {styles.codeText}>Post Code: {code}</Text>
            </ImageBackground>
        </View>
    </TouchableHighlight>
)
export default function zipCodeScreen() {
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems} 
            keyExtractor = {item => item.code} 
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    // zipPlace: {
    //     flex: 1,
    // },

    // zipCode: {
    //     flex: 1,
    // },

    backpic: {
        height: 150,
        width: 420,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    placeText: {
        fontSize: 30,
        color: 'white',
        fontWeight: "bold",
        backgroundColor: 'black',
        opacity: 0.60
    },

    codeText: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
        backgroundColor: 'black',
        opacity: 0.60
    }
}) 