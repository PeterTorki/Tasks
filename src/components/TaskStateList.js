import React, { useReducer, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Task from '../components/Task';
import { AntDesign } from '@expo/vector-icons'; 

const TaskStateList = ({ stateTitle, data, editTasks}) => {
  const renderData = data.map((item) => {
    return (
      <Task
        key={item.id}
        title={item.title}
        category={item.category}
        value={
          item.statue === "completed"
          ? true
          : false 
        }
        id={item.id}
        editTasks={editTasks}
      />
    )
  })
  return (
    <View style={styles.container}>
      {renderData}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginBottom: 13
  },
  
});

export default TaskStateList