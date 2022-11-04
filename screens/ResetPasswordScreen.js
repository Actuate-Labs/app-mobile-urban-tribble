import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Button, Card, TextInput } from 'react-native-paper';
import Logo from '../components/Logo'
import TextInputt from '../components/InputText'
import { useNavigation } from '@react-navigation/native';


const ResetPasswordScreen = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    return (
        <SafeAreaView style={styles.ResetPassword__View}>
        <Card style={styles.ResetPassword__Card}>
            <Text style={styles.resetHeading}>Reset Password</Text>
            <Text style={styles.resetHeadingText}>
                Enter the email associated with the account and we will send
                an email with instractions to reset your password
            </Text>
            <View style={styles.ResetPassword__Header}>
                <TextInputt
                style={styles.resetInput}
                    label="Email"
                    returnKeyType="next"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    left={<TextInput.Icon style={styles.formIcon} name="email" />}
                />
                <Button onPress={() => navigation.navigate('ResetPasswordSuccess')} style={styles.ResetPassword__Button} icon={require('../assets/near_me.png')} mode="contained">Send Instruction</Button>
            </View>
            </Card>
        </SafeAreaView>
    )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
    ResetPassword__View: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    },
    resetInput: {
        top: 300
    },
    resetHeading: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600',
        top: 137,
    },
    resetHeadingText: {
        textAlign: 'center',
        fontSize: 16,
        top: 200,
        lineHeight: 22,
        fontStyle: 'normal',
        width: 300,
    },
    ResetPassword__Button: {
        position: 'relative',
        marginRight: 9,
        marginBottom: 420,
        backgroundColor: '#F39C11',
        borderRadius: 10,
        width: 320,
        top: 400,
        display: 'flex',
        justifyContent: 'center',
    },
    ResetPassword__Card: {
        alignItems: 'center',
        position: 'relative',
        flex: 0,
        height: "100%",
        alignContent: 'center',
    },
    formIcon: {
        color: 'red'
    },
})