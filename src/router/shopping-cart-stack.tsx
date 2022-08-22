import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ShoppingCartScreen from '../screens/shoppingcartscreen/shoppingcartscreen'
import AddressScreen from '../screens/address-screen/address-screen'

const ShopStack = createStackNavigator()

const ShopCartStack  = () => {
  return (
    <ShopStack.Navigator>
        <ShopStack.Screen component={ShoppingCartScreen} name="cart-screen" options={{title: 'Shopping Cart'}} />
        <ShopStack.Screen component={AddressScreen} name="addy-screen" options={{title: 'Address'}} />
    </ShopStack.Navigator>
  )
}

export default ShopCartStack