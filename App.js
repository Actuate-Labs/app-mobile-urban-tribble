import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, PermissionsAndroid, View } from 'react-native';
import * as Location from "expo-location";
import { NavigationContainer } from '@react-navigation/native';
import {RootStackScreen, MainStackNavigator } from './navigation/ScreenStackNavigators'
import DrawerNavigator from './navigation/DrawerNavigator';

// context API
import Auth from './context/stores/Auth'


export default function App() {
  // const androidPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: 'Piyotero App Location Permission',
  //         message: 'Piyotero App needs access to your location',
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK"
  //       }
  //     )
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the location");
  //     } else {
  //       console.log("Location permission denied")
  //     }
  //   } catch (err) {
  //     console.warn(err)
  //   }
  // }

  // useEffect(() => {
  //   if(Platform.OS === 'android') {
  //     androidPermission
  //   } else {
  //     // IOS
  //   }
  // }, [])


  return (
    <Auth>
      <NavigationContainer>
        {/* <DrawerNavigator/> */}
        {/* <MainStackNavigator /> */}
        <RootStackScreen />
      </NavigationContainer>
    </Auth>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
