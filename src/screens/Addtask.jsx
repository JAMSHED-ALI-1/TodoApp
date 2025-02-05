import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TextinputComp from '../components/TextinputComp';
import ButtonComp from '../components/ButtonComp';
import {MMKV} from 'react-native-mmkv';
import Toast from 'react-native-toast-message';

import uuid from 'react-native-uuid';

export const storage = new MMKV();

const Addtask = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const addToTask = () => {
    try {
      const taskId = uuid.v4();
      const task = {
        id: taskId,
        title: title,
        description: desc,
        isComplete: false,
      };
      // Serialize the object into a JSON string
      storage.set(`${taskId}`, JSON.stringify(task));

      // console.log('adding a task : ', task);

      navigation.navigate('Bottom');

      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Task Added', // Title of the toast message
        visibilityTime: 3000,
        autoHide: true,
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: err.message,
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 18, gap: 20, marginTop: '10%'}}>
      <TextinputComp placeholder={'Title'} onChange={setTitle} value={title} />
      <TextinputComp
        placeholder={'Detail'}
        multiline={true}
        onChange={setDesc}
        value={desc}
        isMultiline={true}
        noOflines={10}
        style={{height: 200}}
      />
      <ButtonComp
        title={'ADD'}
        onPress={() => addToTask()}
        disable={!title && !desc}
      />
    </View>
  );
};

export default Addtask;

const styles = StyleSheet.create({});
