import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/homescreen/home'
import ProductScreen from '../screens/productscreen/productscreen'
import Feather from 'react-native-vector-icons/Feather';

interface HeaderComponentProps {
    searchValue: string
    setSearchValue: () => void
}

const HeaderComponent = ({searchValue, setSearchValue}: HeaderComponentProps) => {
    return (
       <SafeAreaView style={{backgroundColor:'#22E3DD'}}>
            <View style={{margin: 10, padding: 5, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
                <Feather name="search" size={20}/>
                <TextInput style={{height: 40, marginLeft: 10}} placeholder='Search...' value={searchValue} onChangeText={setSearchValue}/>
            </View>
        </SafeAreaView>
    );
};

const Stack = createStackNavigator()

const HomeStack = () => {
  const[searchValue, setSearchValue] = useState('')
  return (
    <Stack.Navigator screenOptions={{
            header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
        }}>
        <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
            {() => <HomeScreen searchValue={searchValue}/>}
        </Stack.Screen>
        <Stack.Screen component={ProductScreen} name="ProductScreeen" />
    </Stack.Navigator>
  )
}

export default HomeStack