import React, { useEffect, useContext, useState } from 'react'
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'

import { Button, Card, TextInput } from 'react-native-paper'
import Logo from '../components/Logo'
import InputText from '../components/InputText'
import Error from '../components/Error'
import { useNavigation } from '@react-navigation/native'

// theme
import { colors } from '../common/theme'

// context
import AuthGlobal from '../context/stores/AuthGlobal'
import { loginUser } from '../context/actions/Auth.actions'

const LoginScreen = (props) => {
  const navigation = useNavigation()
  const context = useContext(AuthGlobal)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      props.navigation.navigate('Profile')
    }
  }, [context.stateUser.isAuthenticated])

  const handleLogin = () => {
    const user = { email, password }

    if (email === '' || password === '') {
      setError('Please fill in your credentials')
    } else {
      loginUser(user, context.dispatch)
      console.log('success!', user)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Logo />
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
          label="Password"
          returnKeyType="done"
          // value={values.password}
          onChangeText={setPassword}
          secureTextEntry
          left={<TextInput.Icon style={styles.formIcon} name="lock" />}
          right={<TextInput.Icon style={styles.formIcon} name="eye" />}
        />

        <Button
          onPress={() => navigation.navigate('Profile')} 
          // onPress={handleLogin}
          style={styles.loginButton}
          icon={require('../assets/LoginVector.png')}
          mode="contained"
        >
          Login
        </Button>
      </View>
      <View style={styles.rememberMeView}>
        <TouchableOpacity>
          <Text style={styles.rememberText}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reset Password')}>
          <Text style={styles.linkTextForgotPassword}>
            {' '}
            Forgot your password?{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orContainer}>
        <View style={styles.lineLeft} />
        <View>
          <Text style={styles.dividerText}>OR</Text>
        </View>
        <View style={styles.lineRight} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signupLink}>
          <Text style={styles.remember}>Don't have and account? Register</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  loginContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 160,
  },

  loginButton: {
    height: 58,
    position: 'relative',
    backgroundColor: '#F39C11',
    borderRadius: 10,
    top: 150,
    justifyContent: 'center',
  },

  rememberMeView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  rememberText: {
    // fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
  },

  linkTextForgotPassword: {
    // fontFamily: 'Nunito',
    color: '#5664D2',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 22,
  },

  formIcon: {
    color: 'red',
  },

  orContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },

  dividerText: {
    width: 50,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: 'rgba(80, 93, 105, 1)',
  },

  lineLeft: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: '#CED4DA',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  lineRight: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: '#CED4DA',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  signupLink: {
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center'
  }
})
