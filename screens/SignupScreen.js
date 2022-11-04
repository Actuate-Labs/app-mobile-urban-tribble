import React, { useState, useContext, useEffect} from 'react'
import { SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, View, Text } from 'react-native'

import { Button, Card, TextInput } from 'react-native-paper';
import Logo from '../components/Logo'
import InputText from '../components/InputText'
// import Button from '../components/Button'

const API_URL = Platform.OS === 'ios' ? 'https://d238-105-58-210-53.ngrok.io' : 'https://d238-105-58-210-53.ngrok.io'

const SignupScreen = (props) => {

    const [ email, setEmail ] = useState(null);
    const [ username, setUsername ] = useState(null)
    const [ firstname, setFirstName ] = useState(null);
    const [ lastname, setLastName ] = useState(null);
    const [ gender, setGender ] = useState(null);
    const [ phonenumber, setPhoneNumber ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ confirmPassword, setConfirmPassword ] = useState(null)
    
    const [ isError, setIsError ] = useState(false)
    const [ message, setMessage ] = useState('')
    const [ isLogin, setIsLogin ] = useState(true)

    // Authenticate
    const onSubmitHandler = () => {
        const payload = { email, username, firstname, lastname, gender, phonenumber, password }
        console.log("payload data", payload)
        fetch(`${API_URL}/api/v1/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(async res => {
            try {
                const jsonRes = await res.json()
                console.log("api data...",jsonRes)
                if (res.json !== 200){
                    setIsError(true)
                    setMessage(jsonRes.message)
                } else {
                    setIsError(false)
                    setMessage(jsonRes.message)
                }  
            } catch (err) {
                console.log(err)                
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }

    return (
        <SafeAreaView style={styles.Login__View}>
            <ScrollView>
        <Card style={styles.Login__Card}>
        <Logo />
                <View style={styles.Login__Header}>
                    <InputText
                        label="Email"
                        returnKeyType="next"
                        // value={values.email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        left={<TextInput.Icon style={styles.formIcon} name="email" />}
                    />

                    <InputText
                        label=" Username"
                        returnKeyType="next"
                        // value={values.username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                        textContentType="text"
                        left={<TextInput.Icon style={styles.formIcon} name="account" />}
                    />

                    <InputText
                        label="Password"
                        returnKeyType="done"
                        // value={values.password}
                        onChangeText={setPassword}
                        secureTextEntry
                        left={<TextInput.Icon style={styles.formIcon} name="lock" />}
                        right={<TextInput.Icon style={styles.formIcon} name="eye" />}
                    />

                    <InputText
                        label="Confirm Password"
                        returnKeyType="done"
                        // value={values.password}
                        onChangeText={setPassword}
                        secureTextEntry
                        left={<TextInput.Icon style={styles.formIcon} name="lock" />}
                        right={<TextInput.Icon style={styles.formIcon} name="eye" />} />

                    <Button onPress={onSubmitHandler} 
                            style={styles.Login__Button} 
                            icon={require('../assets/Register.png')} 
                            mode="contained">Register</Button>
                    <View style={styles.rememberMeView}>
                        <TouchableOpacity>
                            <Text style={styles.remember}>
                                By Registering you agree to the Piyotero Terms of Use
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.Register}>
                        <TouchableOpacity>
                            <Text style={styles.login}>
                            Already have an account? Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
            </Card>
            </ScrollView>
        </SafeAreaView>

    )
}

export default SignupScreen

const styles = StyleSheet.create({
    Login__View: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    },
    Login__Header: {
    },
    Login__Button: {
        position: 'relative',
        marginRight: 9,
        marginBottom: 420,
        backgroundColor: '#F39C11',
        borderRadius: 10,
        width: 320,
        // height: 50,
        top: 150,
        display: 'flex',
        justifyContent: 'center',
    },
    Login__Card: {
        alignItems: 'center',
        position: 'relative',
        flex: 0,
        alignContent: 'center',
    },
    forgot: {
        justifyContent: 'center',
        position: 'relative',
        top: -210,
        left: '25%',
        alignItems: 'center',
        // fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
    },
    login: {
        justifyContent: 'center',
        position: 'relative',
        top: -200,
        left: '13%',
        alignItems: 'center',
        // fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
    },
    remember: {
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        top: -240,
        left: '0%',
        alignItems: 'center',
        // fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
    },
    formIcon: {
        color: 'red'
    },
})