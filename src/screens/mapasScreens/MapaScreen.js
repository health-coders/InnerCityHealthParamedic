import React, {useState} from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import MapView from 'react-native-maps'
import {set} from "react-native-reanimated";

const MapaScreen=()=>{
    //localización
    const [focusedLocation,setFocusedLocation] =useState({
        latitude:6.2437877,
        longitude:-75.6089668,
        latitudeDelta: 0.0122,
        longitudeDelta: Dimensions.get('window').width/Dimensions.get('window').height * 0.0122
    })
    //marcador
    const [locationChoosen,setLocationChoosen] = useState(false);
    const [marker,setMarker] = useState(null)

    const pickLocationByClick= () =>{
        const coords = event.nativeEvent.coordinate;
        console.log(coords)
        setFocusedLocation({
            ...focusedLocation,latitude: coords.latitude,
            longitude: coords.longitude

        })
        setLocationChoosen(true);
    }

    if (locationChoosen){
        setMarker(<MapView.Marker coordinate={focusedLocation}/>)
    }
    return(
        <>
            <MapView
                initialRegion={focusedLocation}
                region={focusedLocation}
                style={styles.map}
                onPress={pickLocationByClick()}
            >
                {marker}
            </MapView>
            <Text>MAPA SCREEN</Text>

        </>
    );

    }

const styles = StyleSheet.create({
    map:{
      width:'100%',
        height: 250,
    }
})

export default MapaScreen;
