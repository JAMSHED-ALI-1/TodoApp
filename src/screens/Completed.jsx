import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TasksList from '../components/TasksList';

const Completed = () => {
  return (
    <View style={{flex: 1}}>
      <TasksList data={[1]} viewOnly />
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({});
