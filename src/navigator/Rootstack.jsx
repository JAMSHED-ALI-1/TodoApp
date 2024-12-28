import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottom from './Bottom';
const Stack = createNativeStackNavigator();
function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
const Rootstack = () => {
    return (
        <Stack.Navigator  screenOptions={{
            headerShown:false
          }}>
          <Stack.Screen name="Bottom" component={Bottom} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      );
}

export default Rootstack

const styles = StyleSheet.create({})