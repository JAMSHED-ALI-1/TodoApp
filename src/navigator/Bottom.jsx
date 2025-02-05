import {StyleSheet} from 'react-native';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from '../styles/responsiveSize';
import {COLORS} from '../styles/colors';
import Alltask from '../screens/Alltask';
import Completed from '../screens/Completed';
import fontFamily from '../styles/fontFamily';
const Tab = createBottomTabNavigator();

const Bottom = ({route}) => {
  // console.log(route.params?.key, 'Bottom routes');
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
          fontFamily: fontFamily.medium,
        },
        tabBarActiveTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="All Task"
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
            />
          ),
          headerStyle: {
            backgroundColor: COLORS.primary,
            height: moderateScale(80),
          },
          title: 'All Task',
          headerTitleStyle: {
            color: COLORS.whiteColor,
            fontSize: 22,
            fontWeight: '600',
            fontFamily: fontFamily.medium,
          },
        }}>
        {props => <Alltask {...props} />}
      </Tab.Screen>
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
          headerStyle: {
            backgroundColor: COLORS.primary,
            height: moderateScale(80),
          },
          headerTitleStyle: {
            fontFamily: fontFamily.medium,
            fontSize: 22,
            color: COLORS.whiteColor,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
