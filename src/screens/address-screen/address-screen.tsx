import { View, Text, StyleSheet, TextInput, Alert, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import countryList from 'country-list';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/button/button';

const countries = countryList.getData()

const AddressScreen = () => {

  const [country, setCountry] = useState(countries[0].code)
  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [addressError, setAddressError] = useState('')
  const [city, setCity] = useState('')

  const onCheckout = () => {
    if (!fullname) {
        Alert.alert('Please fill in your full name')
        return
    }
    if (!phone) {
        Alert.alert('Please fill in your Phone Number')
        return
    }
    if (!address) {
        Alert.alert('Please fill in your Address name')
        return
    }
  }

  return (
    <KeyboardAvoidingView>
            <ScrollView style={styles.root}>
                <View style={styles.row}>
                    <Picker selectedValue={country} onValueChange={setCountry}>
                        {countries.map(country => (
                            <Picker.Item value={country.code} label={country.name} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Full Name (First & Last Name)</Text>
                    <TextInput style={styles.input} placeholder="Full Name" value={fullname} onChangeText={setFullname}/>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType={'phone-pad'}/>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress}/>
                    {addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput style={styles.input} placeholder="City" value={city} onChangeText={setCity}/>
                </View>

                <Button text='Checkout' onPress={onCheckout} />
            </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AddressScreen