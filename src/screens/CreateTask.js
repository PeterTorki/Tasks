import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const CreateTask = ({ addNewDay, modalVisibility, isVisible, dateFormatter }) => {

  const returnedDate = dateFormatter();
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState(returnedDate);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  }

  const handleChosen = (date) => {
    setDate(dateFormatter(date));
    toggleDatePicker();
  }
  return (
    <View style={styles.childContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create a new Task</Text>
        <TouchableOpacity onPress={() => modalVisibility(!isVisible)}>
          <AntDesign name='close' size={24} color='black' />
        </TouchableOpacity>
      </View>
      
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TouchableOpacity 
        style={{ ...styles.inputStyle, borderColor: 'black', borderWidth: 1 }}
        onPress={toggleDatePicker}
      >
        <Text>{date}</Text>
      </TouchableOpacity>
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onPress={toggleDatePicker}
        onConfirm={handleChosen}
        onCancel={toggleDatePicker}
        minimumDate={new Date()}
        display='inline'
      />
      <Button title='Save Task' onPress={() => {
        addNewDay(date, { id: Math.floor(Math.random() * 100000) + 7, statue: 'incomplete' ,title, category })
        modalVisibility(!isVisible)
      }}/>
    </View>
  )
}


const styles = StyleSheet.create({
  childContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  inputStyle: {
    fontSize: 18,
    backgroundColor: '#E8E8E8',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10
  },
});

export default CreateTask;