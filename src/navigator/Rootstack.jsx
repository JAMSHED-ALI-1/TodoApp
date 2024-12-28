import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bottom from './Bottom';
import Addtask from '../screens/Addtask';
const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Rootstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Bottom" component={Bottom} />
      <Stack.Screen name="addTask" component={Addtask} />
    </Stack.Navigator>
  );
};

export default Rootstack;

const styles = StyleSheet.create({});
