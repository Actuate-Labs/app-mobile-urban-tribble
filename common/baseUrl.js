import { Platform } from 'react-native'

let baseUrl = ''

{ Platform.OS == 'android' 
?  baseUrl = 'https://0527-105-58-210-53.ngrok.io/api/v1/'
:  baseUrl = 'https://0527-105-58-210-53.ngrok.io/api/v1/'
}

export default baseUrl