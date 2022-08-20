import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface ButtonProps {
    text: string;
    onPress: () => void;
    containerStyles?: object;
}
const Button = ({text, onPress, containerStyles}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style = {[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#f1872f',
        marginVertical: 10,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontSize:  16
    }
})

export default Button;