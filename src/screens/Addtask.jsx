import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import TextinputComp from '../components/TextinputComp';
import ButtonComp from '../components/ButtonComp';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

const Addtask = ({}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const addToTask = () => {};

  // console.log('title', title);
  return (
    <View style={{flex: 1, paddingHorizontal: 18, gap: 20, marginTop: '10%'}}>
      <TextinputComp placeholder={'Title'} onChange={setTitle} value={title} />
      <TextinputComp placeholder={'Detail'} onChange={setDesc} value={desc} />
      <ButtonComp title={'ADD'} onPress={addToTask} />
    </View>
  );
};

export default Addtask;

const styles = StyleSheet.create({});
