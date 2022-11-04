import React, {useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import { useNavigation } from '@react-navigation/native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { Button } from 'react-native-elements'


// Todo: style Next, Skip and Done buttons
// Todo: handle event for each button

const OnboardingComponent = () => {
    const navigation = useNavigation();

    const NextButton = ({...props}) => (
        <TouchableOpacity 
            style={{marginHorizontal:10}}
            {...props}>
            <Text>Next</Text>
        </TouchableOpacity>
    )

    const Done = ({...props}) => (
        <TouchableOpacity
            style={{marginHorizontal:10}}
            {...props}>
            <Text>Get Started</Text>
        </TouchableOpacity>
    )
    
    return (
        <>
            <Onboarding
                onSkip={() => navigation.navigate("Login")}
                onDone={() => navigation.navigate("Signup")}
                NextButtonComponent={NextButton}
                // SkipButtonComponent={SkipButton}
                DoneButtonComponent={Done}
                pages={[
                    {
                    backgroundColor: '#E5E5E5',
                    image: <Image style={{height:300, width: 300}} source={require('../assets/Take.png')} />,
                    title: 'Enjoy Instant Delivery',
                    subtitle: '',
                    },
                    {
                    backgroundColor: '#E5E5E5',
                    image: <Image source={require('../assets/Pay.png')} />,
                    title: 'Pay Confidently',
                    subtitle: '',
                    },
                    {
                    backgroundColor: '#E5E5E5',
                    image: <Image source={require('../assets/Locc.png')} />,
                    title: 'Track your order in Real Time',
                    subtitle: '',
                    },
                ]}
            />

        </>
    )
}

const styles = StyleSheet.create({
    nextTextWrapper: {
        width: 40,
        height: 40,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    nextText: {
        color: '#000000',
        fontSize: 10
    }
});

export default OnboardingComponent