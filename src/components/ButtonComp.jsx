import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../styles/colors'

const ButtonComp = ({ title, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={styles.buttonBox}
      activeOpacity={0.7} // Adds a slight opacity change when pressed
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    buttonBox: {
        backgroundColor: COLORS.primary,
        paddingVertical: 16, 
        paddingHorizontal: 24, 
        borderRadius: 8,
        alignItems: 'center', 
        justifyContent: 'center', 
        marginVertical: 10, 
    },
    buttonText: {
        color: 'white',
        fontSize: 16, 
        fontWeight: 'bold', 
    }
})
