import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TasksList from '../components/TasksList';
import {COLORS} from '../styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const Alltask = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <TasksList data={[1]} />

      <Icon
        name="pluscircle"
        color={COLORS.primary}
        size={50}
        style={{position: 'absolute', right: 20, bottom: 20}}
        onPress={navigation.navigate('')}
      />
    </View>
  );
};

export default Alltask;

const styles = StyleSheet.create({});
