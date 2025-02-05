import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextinputComp from '../components/TextinputComp';
import ButtonComp from '../components/ButtonComp';
import {storage} from './Addtask';
import {COLORS} from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import Toast from 'react-native-toast-message';
const EditTask = ({navigation, route}) => {
  const taskId = route.params.key;
  const [title, setTitle] = useState('');
  const [detail, setDetails] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const todoJson = storage.getString(`${taskId}`);
    if (todoJson) {
      try {
        const data = JSON.parse(todoJson);
        setTitle(data?.title ?? '');
        setDetails(data.description ?? '');
      } catch (err) {
        Toast.show({
          text1: err,
        });
      }
    }
  };

  const updatedTask = {
    id: taskId,
    title: title,
    description: detail,
    isComplete: false,
  };

  const updateTodo = () => {
    try {
      storage.set(`${taskId}`, JSON.stringify(updatedTask)); // Store the updated list of tasks
      navigation.navigate('Bottom');
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Updated', // Title of the toast message
        text2: 'the todo has been updated', // Subtext (optional)
        visibilityTime: 3000,
        autoHide: true,
      });
    } catch (err) {
      console.error(err, 'Erro updating');
    }
  };

  return (
    <View style={{...styles.container}}>
      <View>
        <Text style={styles.text}>Title</Text>
        <TextinputComp
          placeholder={'Title'}
          value={title}
          onChange={setTitle}
        />
      </View>
      <View>
        <Text style={styles.text}>Details</Text>
        <TextinputComp
          placeholder={'Detail'}
          value={detail}
          onChange={setDetails}
          noOflines={10}
          isMultiline={true}
        />
      </View>
      <ButtonComp title={'Save'} onPress={updateTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 20,
    marginTop: 10,
  },
  labels: {
    fontSize: 14,
    color: COLORS.blackColor,
    fontFamily: fontFamily.medium,
  },
});

export default EditTask;
