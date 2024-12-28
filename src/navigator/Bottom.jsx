import {View, Platform, StyleSheet, Text} from 'react-native';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {PlatformPressable} from '@react-navigation/elements';
import TasksList from '../components/TasksList';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from '../styles/responsiveSize';
import {COLORS} from '../styles/colors';
import Alltask from '../screens/Alltask';
import Completed from '../screens/Completed';
const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.whiteColor,
          height: moderateScale(70),
        },
        tabBarLabelStyle: {
          color: COLORS.primary,
          paddingVertical: moderateScale(8),
          fontWeight: '500',
        },
        tabBarActiveTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="All Task"
        component={Alltask}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={moderateScale(25)}
              color={color}
            />
          ),

          headerRight: () => (
            <MaterialIcons
              name="calendar-month"
              size={moderateScale(35)}
              color={COLORS.whiteColor}
              style={{marginRight: moderateScale(10)}}
              onPress={() => alert('Search Pressed')}
            />
          ),
          headerStyle: {
            backgroundColor: COLORS.primary,
            height: moderateScale(80),
          },
          title: 'TODO APP',
          headerTitleStyle: {
            color: COLORS.whiteColor,
            fontSize: 22,
            fontWeight: '600',
          },
        }}
      />
      <Tab.Screen
        name="Completed"
        component={Completed}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="check"
              size={moderateScale(25)}
              color={color}
            />
          ),
          headerStyle:{backgroundColor:COLORS.primary}
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
