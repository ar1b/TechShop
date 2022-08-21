import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const QuantitySelector = ({quantity, setQuantity}) => {

    const onMinus = () => {
        setQuantity(Math.max(0, quantity - 1))
    }
 
    const onPlus = () => {
        setQuantity(quantity + 1)
    }

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>
            -
        </Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        width: 130
    },
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D1D1D1'
    },
    buttonText: {

    },
    quantity: {
        color: '#007EB9'
    }
})

export default QuantitySelector;