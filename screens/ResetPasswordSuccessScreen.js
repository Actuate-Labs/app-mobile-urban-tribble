import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'
import { Button, Card, TextInput } from 'react-native-paper';
import Logo from '../components/Logo'
import TextInputt from '../components/InputText'
import { useNavigation } from '@react-navigation/native';


const ResetPasswordSuccessScreen = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    return (
        <SafeAreaView style={styles.ResetPassword__View}>
        <Card style={styles.ResetPasswordSuccess__Card}>
            <View>
                <Image style={styles.ResetPasswordSuccess__EmailIcon} source={require('../assets/email.png')} />
            </View>
            <Text style={styles.ResetPasswordSuccess__Heading}>Check your email</Text>
            <Text style={styles.ResetPasswordSuccess__Text}>
                Enter the email associated with the account and we will send
                an email with Instractions to reset your password
            </Text>
             <Text style={styles.ResetPasswordSuccess__Text2}>
                Didn't recieve the email? Check your spam section
                or try another email address
            </Text>
            </Card>
        </SafeAreaView>
    )
}

export default ResetPasswordSuccessScreen

const styles = StyleSheet.create({
    ResetPasswordSuccess__Card: {
        alignItems: 'center',
        position: 'relative',
        flex: 0,
        height: "100%",
        alignContent: 'center',
    },
    ResetPasswordSuccess__Heading:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600',
        top: 137,
    },
    ResetPasswordSuccess__Text: {
        textAlign: 'center',
        fontSize: 16,
        top: 200,
        lineHeight: 22,
        fontStyle: 'normal',
        width: 300,
        color: '#505D69',
    },
    ResetPasswordSuccess__Text2: {
        textAlign: 'center',
        fontSize: 16,
        top: 250,
        lineHeight: 22,
        fontStyle: 'normal',
        width: 300,
        color: '#505D69',
    },
    ResetPasswordSuccess__EmailIcon: {
        position: 'relative',
        alignItems: 'center',
        width: 110,
        height: 110,
        left: '30%',
        top: 90,
        marginBottom: 8,
    },
})