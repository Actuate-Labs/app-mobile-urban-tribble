import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput as Input } from 'react-native-paper'

const InputText = ({ errorText, description, ...props }) => {
    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                selectionColor="red"
                underlineColor="transparent"
                mode="outlined"
                {...props}
            />
            {description && !errorText ? (
                <Text style={styles.description}>{description}</Text>
            ) : null}
            {errorText ? <Text style={styles.error}>{errorText}</Text> : null}

        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    width: '100%',
    left: 0,
    top: 110,
  },
  description: {
    fontSize: 13,
    color: '#E5E5E5',
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: 'red',
    paddingTop: 8,
  },
})