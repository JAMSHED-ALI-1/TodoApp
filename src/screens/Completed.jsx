import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import TasksList from '../components/TasksList';
import {storage} from './Addtask';
import Toast from 'react-native-toast-message';

const Completed = ({navigation}) => {
  const [completeTasks, setCompleteTasks] = useState([]);
  const CompletedTasksKeys = storage.getAllKeys();
  const allCompletedTask = [];

  const fetchCompletedTasks = useCallback(() => {
    try {
      CompletedTasksKeys.forEach(item => {
        const todoJson = storage.getString(`${item}`);
        if (todoJson) {
          const todoObject = JSON.parse(todoJson);
          if (todoObject.isComplete === true) {
            allCompletedTask.push(todoObject);
          }
        }
      });
      setCompleteTasks(allCompletedTask);
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: err.message,
      });
    }
  }, [CompletedTasksKeys]);

  useEffect(() => {
    fetchCompletedTasks();
  }, []);

  return (
    <View style={{flex: 1}}>
      <TasksList
        data={completeTasks}
        isTaskCompleted
        setTasks={setCompleteTasks}
      />
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({});
