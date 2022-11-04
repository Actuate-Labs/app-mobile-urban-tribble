import React, {useState, useEffect} from 'react'
import {View, StyleSheet, TextInput, SafeAreaView, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import PlaceRow from './PlaceRow'


const DestinationSearch = ({props, navigation}) => {
    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)


    return (
        <View style={styles.container}> 
            <GooglePlacesAutocomplete
             placeholder='From:'
             onPress={(data, details = null) => {
              setOriginPlace({data, details});
            }}
             enablePoweredByContainer={false}
             suppressDefaultStyles
             currentLocation={true}
             currentLocationLabel='Current location'
             styles={{
               textInput: styles.textInput,
               container: styles.autocompleteContainer,
               listView: styles.listView,
               separator: styles.separator,
             }}
             fetchDetails
             query={{ key: 'AIzaSyC8_LtpbfCmYR_db1vYJBUxve4MWZc0I9g', language: 'en'}}
             renderRow={(data) => <PlaceRow data={data}/>}
             renderDescription={(data) => data.description || data.vicinity}/>

             <GooglePlacesAutocomplete
             placeholder='To:'
             onPress={(data, details = null) => {
              setDestinationPlace({data, details});
            }}
             enablePoweredByContainer={false}
             styles={{
               textInput: styles.textInput,
               container: {
                 ...styles.autocompleteContainer,
                 top: 55,
               },
               separator: styles.separator
             }}
             suppressDefaultStyles
             fetchDetails
             query={{ key: 'AIzaSyC8_LtpbfCmYR_db1vYJBUxve4MWZc0I9g', language: 'en'}}
             renderRow={(data) => <PlaceRow data={data}/>}/>         
            
            
            {/* Circle near Origin input */}
            <View style={styles.circle} />
            {/* Line between dots */}
            <View style={styles.line} />
            {/* Square near Destination input */}
            <View style={styles.square} />
        </View>

    )
}

export default DestinationSearch

const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: '100%',
      backgroundColor: 'rgba(52, 50, 52, 0.9)'
    },
    textInput: {
      padding: 10,
      borderRadius: 30,
      backgroundColor: '#eee',
      marginVertical: 5,
      marginLeft: 20,
    },
  
    separator: {
      backgroundColor: '#efefef',
      height: 1,
    },
    listView: {
      position: 'absolute',
        top: 105,
    },
    autocompleteContainer: {
      position: 'absolute',
      top: 0,
      left: 10,
      right: 10,
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    iconContainer: {
      backgroundColor: '#a2a2a2',
      padding: 5,
      borderRadius: 50,
      marginRight: 15,
    },
    locationText: {
  
    },
  
    circle: {
      width: 5,
      height: 5,
      backgroundColor: 'black',
      position: 'absolute',
      top: 20,
      left: 15,
      borderRadius: 5,
    },
    line: {
      width: 1,
      height: 50,
      backgroundColor: '#c4c4c4',
      position: 'absolute',
      top: 28,
      left: 17,
    },
    square: {
      width: 5,
      height: 5,
      backgroundColor: 'black',
      position: 'absolute',
      top: 80,
      left: 15,
    },
  });
