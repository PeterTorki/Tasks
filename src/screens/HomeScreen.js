import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Header from '../components/Header';
import { MONTH } from '../data/TasksData'
import CreateTask from '../screens/CreateTask'
import Modal from "react-native-modal";
import RenderTasks from '../components/RenderTasks';

const dateFormatter = (date = new Date()) => {
  return `${MONTH[date.getUTCMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const printObject = (msg = 'Hi: ' , obj) => {
  console.log(msg)
  console.log(JSON.stringify(obj, null, 2));
}

const HomeScreen = () => {
  const returnedDate = dateFormatter();
  
  const [date, setDate] = useState(returnedDate);
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [serverData, setServerData] = useState([]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const dateWithTasksObj = (date) => {
    const foundTasks = serverData.find(item => item.date === date) ;
    return foundTasks;
  }
  
  useEffect(() => {
    const retrievedTasks = dateWithTasksObj(date);
    setTasks(retrievedTasks !== undefined? retrievedTasks.tasks: []);
  }, [date, serverData])

  const addNewDay = (date, task) => {
    const foundDay = serverData.find((item) => item.date === date)
    
    if (foundDay === undefined) {
      const newDate = { date: date, tasks: [task] }
      setServerData([...serverData, newDate]);

    } else {
      foundDay.tasks.push(task);
      const dataInServer = [...serverData];
      setServerData(dataInServer)
    }
  }

  const editTasks = ({id, statue}) => {
    const foundDay = serverData.find((item) => item.date === date)
    const foundTask = foundDay.tasks.map(task => task.id === id? {...task, statue: statue} : task );

    foundDay.tasks = foundTask;
    const editedTasks = [...serverData];
    setServerData(editedTasks)
  }


  const filterTasksByStatue = (statue) => {
    return tasks.filter(item => item.statue === statue)
  }

  const incompleteTasks = filterTasksByStatue('incomplete');
  const completedTasks = filterTasksByStatue('completed');

  return (
    <View style={styles.container}>
      
      <Header dateSetter={setDate} date={date}/>

      <Modal
        animationOutTiming={500}
        animationOut={'slideOutDown'}
        isVisible={isModalVisible}
        onBackdropPress={() => toggleModal()}
      >
        <CreateTask
          addNewDay={addNewDay}
          dateFormatter={dateFormatter}
          modalVisibility={toggleModal}
          isVisible={isModalVisible? true: false}

        />
      </Modal>
      
      {
        tasks.length
        ?
          <RenderTasks
            completedTasks={completedTasks}
            incompleteTasks={incompleteTasks}
            editTasks={editTasks}
          />
        :
          <Text style={styles.noTask}>There's No Tasks Yet</Text>
      }

      <View style={{...styles.addButton, alignSelf: tasks.length !== 0? 'flex-end': 'center'}}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <AntDesign name="pluscircle" size={45} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 70,
    marginHorizontal: 40,
    marginBottom: 50
  },
  
  noTask: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#575767',
    marginTop: 200,
    textAlign: 'center'
  },
  addButton: {
    justifyContent: 'flex-end',
    zIndex: 1,
  }
});

export default HomeScreen