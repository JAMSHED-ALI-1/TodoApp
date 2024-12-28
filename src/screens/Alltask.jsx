import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TasksList from '../components/TasksList';

const Alltask = () => {
  return (
    <View style={{flex: 1}}>
      <TasksList data={[1]} />
    </View>
  );
};

export default Alltask;

const styles = StyleSheet.create({});
