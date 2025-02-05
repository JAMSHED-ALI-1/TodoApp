import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TasksList from '../components/TasksList';
import {COLORS} from '../styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {storage} from './Addtask';
import fontFamily from '../styles/fontFamily';
import Toast from 'react-native-toast-message';

const Alltask = ({navigation}) => {
  const [tasks, setTasks] = useState([]);

  const fetchAllTasks = () => {
    const allTasks = [];
    const keysList = storage.getAllKeys();
    keysList.forEach(item => {
      const jsonUser = storage.getString(`${item}`);
      // console.log('json in allTask: ', jsonUser);

      if (jsonUser) {
        try {
          const userObject = JSON.parse(jsonUser);
          if (!userObject.isComplete) {
            allTasks.push(userObject);
            // console.log(userObject);
          }
        } catch (err) {
          Toast.show({
            text1: err.message,
          });
        }
      }
    });
    setTasks(allTasks);
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <View style={{flex: 1}}>
      {tasks.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../assets/Images/task.png')}
            style={styles.emptyImage}
          />
          <Text style={styles.message}>Add a new task</Text>
        </View>
      ) : (
        <TasksList
          data={tasks}
          setTasks={setTasks}
          fetchAllTasks={fetchAllTasks}
        />
      )}
      <Icon
        name="pluscircle"
        color={COLORS.primary}
        size={50}
        style={{position: 'absolute', right: 20, bottom: 20}}
        onPress={() => navigation.navigate('Add Task')}
      />
    </View>
  );
};

export default Alltask;

const styles = StyleSheet.create({
  emptyImage: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    tintColor: COLORS.primary,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: COLORS.blackOpacity40,
  },
});
