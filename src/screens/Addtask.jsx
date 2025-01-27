import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextinputComp from '../components/TextinputComp';
import ButtonComp from '../components/ButtonComp';

import {MMKV} from 'react-native-mmkv';
export const storage = new MMKV();

const Addtask = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const [allTodos, setAllTodos] = useState([]);

  const user = {
    title: title,
    description: desc,
  };

  const addToTask = () => {
    // Serialize the object into a JSON string
    storage.set('user', JSON.stringify(user));

    navigation.navigate('Bottom', {key: 'user'});
    // storage.set('is-mmkv-fast-asf', true)
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 18, gap: 20, marginTop: '10%'}}>
      <TextinputComp placeholder={'Title'} onChange={setTitle} value={title} />
      <TextinputComp
        placeholder={'Detail'}
        numberOfLines={10}
        multiline={true}
        onChange={setDesc}
        value={desc}
      />
      <ButtonComp title={'ADD'} onPress={() => addToTask()} />
    </View>
  );
};

export default Addtask;

const styles = StyleSheet.create({});
