import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import TextinputComp from '../components/TextinputComp';
import ButtonComp from '../components/ButtonComp';

const Addtask = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header title="Add Task" onpressBack={() => navigation.goBack()} />

      <TextinputComp placeholder={'Title'} />
      <TextinputComp placeholder={'Detail'} />
      <ButtonComp title={'ADD'} />
    </View>
  );
};

export default Addtask;

const styles = StyleSheet.create({});
