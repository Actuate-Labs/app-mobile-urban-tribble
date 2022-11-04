import React from 'react';
import { createDrawerNavigator, createAppContainer } from '@react-navigation/drawer'
import { Icon } from 'react-native-elements'
import { DrawerContent } from '../components/DrawerContent'
import { MainStackNavigator } from './ScreenStackNavigators'


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator
           drawerContent={props => <DrawerContent {...props}/>}
           screenOptions={{ activeTintColor:'#FFB500', inactiveTintColor: '#3A95FF' }}>
            <Drawer.Screen
               name='DashboardDrawer'
               component={ MainStackNavigator }
               options={{
                   headerShown: false,
                   title: 'Dashboard',
                   drawerIcon: ({ focused, size }) =>(
                       <Icon type = "material" name = "dashboard" color = {focused ? '#3A95FF' : '#FFB500'} size = {size} />
                   )}} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;