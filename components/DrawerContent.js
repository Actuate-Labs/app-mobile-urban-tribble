import React from 'react';
import styles from './styles';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useTheme, Avatar, Title, Caption, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'

export function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>
                        <TouchableOpacity>
                            <View style={styles.userInfoSection}>
                                <View style={{ flexDirection: "row", marginTop: 15 }}>
                                <Avatar.Image
                                   source={require("../assets/profile/PhotoProfile.png")}
                                   size={50} />
                                <View style={{ flexDirection: "column", marginLeft: 15 }}>
                                  <Title style={styles.title}>Rachael Doe</Title>
                                  <Caption style={styles.cation}>Rachael@gmail.com</Caption>
                                </View>
                               </View>
                            </View>
                        </TouchableOpacity>
                    </Drawer.Section>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                  icon={({ color, size }) => (
                  <Icon name="dashboard" type='material' color={color} size={size} />
                )}
                label="Dashboard"
                onPress={() => {props.navigation.navigate('Profile')}}
                 />
            </DrawerContentScrollView>
        </View>
    )
}