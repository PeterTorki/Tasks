import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import HandleDatePicker from '../components/HandleDatePicker';

const Header = ({ date, dateSetter }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
  return (
    <View>
        <TouchableOpacity
          onPress={() => setDatePickerVisibility(!isDatePickerVisible)}
          style={styles.buttonContainer}
        >
          <Text style={styles.dateText}>{date}</Text>
          <AntDesign name="down" size={20} color="black" st/>
        </TouchableOpacity>

        <HandleDatePicker
          dateSetter={dateSetter}
          visibility={isDatePickerVisible}
          visibilitySetter={setDatePickerVisibility}
        />
      </View>
  )
}


const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 10
  },
});

export default Header