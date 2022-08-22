import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabRouter from './tabRouter'
import HomeScreen from '../screens/homescreen/home'
import ProductScreen from '../screens/productscreen/productscreen'
import ShoppingCartScreen from '../screens/shoppingcartscreen/shoppingcartscreen'
import AddressScreen from '../screens/address-screen/address-screen'

const Root = createStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
        <Root.Navigator screenOptions={{headerShown: false}}>
            <Root.Screen component={TabRouter} name="main" />
        </Root.Navigator>
    </NavigationContainer>
  )
}

export default Router