import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../styles/colors';
import {useNavigation} from '@react-navigation/native';

const TasksList = ({data, viewOnly}) => {
  const navigation = useNavigation();
  const renderList = ({item}) => (
    <View style={styles.iconRow}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
      {viewOnly ? null : (
        <View style={{...styles.iconRow, gap: '10%'}}>
          <Icon
            name="edit"
            size={20}
            color={COLORS.primary}
            onPress={() => navigation.navigate('EditTask')}
          />
          <Icon name="delete" size={20} color={COLORS.primary} />
          <Icon name="checkcircleo" size={20} color={COLORS.primary} />
        </View>
      )}
    </View>
  );

  return (
    <View style={{flex: 1, padding: 10}}>
      <FlatList
        data={data}
        renderItem={renderList}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TasksList;

const styles = StyleSheet.create({
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    color: COLORS.primary,
  },
  desc: {
    fontSize: 12,
    color: 'black',
  },
});
