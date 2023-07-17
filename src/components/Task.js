import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

const Task = ({ title, category, value, editTasks, id }) => {
  const [checked, setChecked] = useState(value)
  
  return (
    <View style={styles.task}>
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox} 
          value={checked}
          onValueChange={() => {
            setChecked(!checked);
            const statue =  !value ? 'completed': 'incomplete'
            editTasks({ id, statue });
          }}
          color={checked ? '#DADADA' : undefined}
        />
        <View style={styles.checkboxTexts}>
          <TouchableOpacity>
            <Text style={styles.title && { color: checked? '#B9B9BE': '#575767'}}>{title}</Text>
            <Text style={styles.category}>{category}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  task: {
    marginVertical: 5
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5
  },
  checkboxTexts: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 14,
  },
  title: {
    fontWeight: '500',
    lineHeight: 24,
    color: '#575767'
  },
  category: {
    fontWeight: '600',
    color: '#B9B9BE',
    
  },

});

export default Task