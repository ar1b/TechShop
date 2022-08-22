import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './home-stack';
import HomeScreen from '../screens/homescreen/home'
import ShopCartStack from './shopping-cart-stack'
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator()

const TabRouter = () => {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false, activeTintColor: '#E47911', inactiveTintColor: '#FFBD7D'}}>
        <Tab.Screen 
            component={HomeStack}
            name="Home"
            options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="home" color={color} size={25} />
                )
            }}
        />
        <Tab.Screen 
            component={ShopCartStack}
            name="shopping-cart"
            options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="shopping-cart" color={color} size={25} />
                )
            }}
        />
        <Tab.Screen 
            component={HomeScreen}
            name="profile"
            options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="user" color={color} size={25} />
                )
            }}
        />
        <Tab.Screen 
            component={HomeScreen}
            name="drawer-menu"
            options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="menu" color={color} size={25} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default TabRouter