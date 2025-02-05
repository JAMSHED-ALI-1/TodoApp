import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {storage} from '../screens/Addtask';
import Toast from 'react-native-toast-message';
import fontFamily from '../styles/fontFamily';

const TasksList = ({data, isTaskCompleted, setTasks, fetchAllTasks}) => {
  const navigation = useNavigation();

  const slideAnim = new Animated.Value(0); // Start off-screen (negative X position) on task complete
  const fadeinAnim = new Animated.Value(1); //  on task delete

  const handleTaskComplete = (id, title, desc, isComplete) => {
    const completedTask = {
      id: id,
      title: title,
      description: desc,
      isComplete: isComplete,
    };
    // console.log('setting task as completed', completedTask);
    try {
      storage.set(`${id}`, JSON.stringify(completedTask));

      const updatedTask = data.filter(item => item.id !== id);
      setTasks(updatedTask);

      // slideAnim.setValue(0); // Reset animation value to 0 before starting

      Animated.timing(slideAnim, {
        toValue: 100, // Animate to full opacity (visible)
        duration: 500, // Animation duration in ms
        useNativeDriver: true, // Use native driver for better performance
      }).start();

      fetchAllTasks();
      Toast.show({
        type: 'success',
        text1: 'completed',
        visibilityTime: 3000,
        autoHide: true,
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: err.message,
        autoHide: true,
      });
    }
  };

  const handleDeleteTask = id => {
    // storage.clearAll();
    try {
      const updatedTask = data.filter(item => item.id !== id);
      setTasks(updatedTask);
      storage.delete(`${id}`);

      // fadeinAnim.setValue(0.5);
      // Animated.timing(fadeinAnim, {
      //   toValue: 10,
      //   duration: 500,
      //   useNativeDriver: true, // Use native driver for better performance
      // }).start();

      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Task Deleted',
        visibilityTime: 2000,
        autoHide: true,
      });

      fetchAllTasks && fetchAllTasks();
    } catch (err) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: err.message,
        autoHide: true,
      });
    }
  };

  const renderList = ({item}) => {
    // console.log(item);
    return (
      <Animated.View
        style={[
          styles.taskContainer,
          {transform: [{translateX: slideAnim}], opacity: fadeinAnim},
        ]}>
        {/* Todo Content  */}
        <View style={{width: '65%', gap: 5}}>
          <Text style={styles.title}>
            {item.title?.length > 50
              ? item.title.slice(0, 50) + '...'
              : item.title}
          </Text>
          <Text style={styles.desc}>
            {item.description?.length > 100
              ? item.description.slice(0, 100) + '...'
              : item.description}
          </Text>
        </View>
        {/* functional buttons */}
        <View style={styles.iconRow}>
          <Icon
            name="delete"
            size={20}
            color={COLORS.primary}
            onPress={() => handleDeleteTask(item.id)}
          />
          {!isTaskCompleted && (
            <>
              <Icon
                name="edit"
                size={20}
                color={COLORS.primary}
                onPress={() => navigation.navigate('EditTask', {key: item.id})}
              />
              <Icon
                name="checkcircleo"
                size={20}
                color={COLORS.primary}
                onPress={() =>
                  handleTaskComplete(
                    item.id,
                    item.title,
                    item.description,
                    true,
                  )
                }
              />
            </>
          )}
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      <FlatList
        data={data}
        renderItem={renderList}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={15}
      />
    </View>
  );
};

export default TasksList;

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
  },

  iconRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 20,
    alignItems: 'center',
    // width: '30%',
  },

  title: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: fontFamily.semiBold,
  },
  desc: {
    fontSize: 12,
    color: 'black',
  },
});
// storage.clearAll();
