import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    // display: 'flex',
    // flex: 1,
    width: 110,
    height: 110,
    left: 120,
    top: 90,
    marginBottom: 8,
  },
})