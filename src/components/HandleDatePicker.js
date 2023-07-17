import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MONTH } from '../data/TasksData'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const currentDate = (date = new Date()) => {
  return `${MONTH[date.getUTCMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const HandleDatePicker = ({ dateSetter, visibility, visibilitySetter }) => {

  const toggleDatePicker = () => {
    visibilitySetter(!visibility);
  }

  const handleChosen = (date) => {
    dateSetter(currentDate(date));
    toggleDatePicker();
  }
  
  return (
    <DateTimePickerModal
      isVisible={visibility}
      mode="date"
      onConfirm={handleChosen}
      onCancel={toggleDatePicker}
      minimumDate={new Date()}
      display='inline'
    />
  )
}

const styles = StyleSheet.create({});
export default HandleDatePicker