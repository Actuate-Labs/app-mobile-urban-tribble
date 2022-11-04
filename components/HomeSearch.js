import React from 'react'
import { View, Text, Pressable } from 'react-native'

import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import {useNavigation} from '@react-navigation/native'
import { StyleSheet } from 'react-native'


const HomeSearch = (props) => {
    const navigation = useNavigation()

    const goToSearch = () => {
        navigation.navigate("DestinationSearch")
    }
  return (
      <View style={{backgroundColor: 'transparent'}}>
          {/* input box */}
          <Pressable onPress={goToSearch} style={styles.inputBox}>
              <Text style={styles.inputText}>From:</Text>
              <View style={styles.timeContainer}>
                  <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
                  <Text>Now</Text>
                  <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
              </View>
          </Pressable>
          {/* previous destination */}
          <View style={styles.row}>
              <View style={styles.iconContainer}>
                  <AntDesign name={'clockcircle'} size={16} color={'#ffffff'} />
              </View>
              <Text style={styles.destinationText}>Banana Hill, Karuri</Text>
          </View>
          <View style={styles.row}>
              <View style={styles.iconContainer}>
                  <AntDesign name={'home'} size={16} color={'#ffffff'} />
              </View>
              <Text style={styles.destinationText}>Banana Hill, Karuri</Text>
          </View>
      </View>
  )
}

export default HomeSearch


const styles = StyleSheet.create({
    inputBox: {
      backgroundColor: '#e7e7e7',
      margin: 10,
      padding: 10,
      borderRadius: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    inputText: {
      fontSize: 20,
      fontWeight: '600',
      color: '#434343',
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 100,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 50
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      borderBottomWidth: 1,
      borderColor: 'transparent',
    },
    iconContainer: {
      backgroundColor: '#b3b3b3',
      padding: 10,
      borderRadius: 25,
    },
    destinationText: {
      marginLeft: 10,
      fontWeight: '500',
      fontSize: 16,
    },
  });