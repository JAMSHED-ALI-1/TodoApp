import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bottom from './Bottom';
import EditTask from '../screens/EditTask';
import { COLORS } from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';
import Addtask from '../screens/Addtask';
const Stack = createNativeStackNavigator();


const Rootstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        
      }}>
      <Stack.Screen name="Bottom" component={Bottom} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="addTask" component={Addtask}  options={{
           
           headerStyle: {
             backgroundColor: COLORS.primary,
             height: moderateScale(80),
           },
           headerTitleStyle: {
            color: COLORS.whiteColor,
            fontSize: 22,
            fontWeight: '600',
          },
       }}/>
      <Stack.Screen name="EditTask" component={EditTask} options={{
           
           headerStyle: {
             backgroundColor: COLORS.primary,
             height: moderateScale(80),
           },
           headerTitleStyle: {
            color: COLORS.whiteColor,
            fontSize: 22,
            fontWeight: '600',
          },
       }}/>
    </Stack.Navigator>
  );
};

export default Rootstack;

const styles = StyleSheet.create({});
