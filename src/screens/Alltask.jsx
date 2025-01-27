import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TasksList from '../components/TasksList';
import {COLORS} from '../styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {storage} from './Addtask';

// export const storage = new MMKV();

const Alltask = ({navigation, route}) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const jsonUser = storage.getString('user');

    if (jsonUser) {
      try {
        const userObject = JSON.parse(jsonUser);
        console.log(userObject, 'asdfadsf');
        setTasks([...tasks, userObject]);
      } catch (err) {
        console.error(err, 'list fail');
      }
    }
  }, []);
  return (
    <View style={{flex: 1}}>
      <TasksList data={tasks} />

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

const styles = StyleSheet.create({});
