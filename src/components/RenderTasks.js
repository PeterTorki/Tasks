import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TaskStateList from './TaskStateList';

const RenderTasks = ({ incompleteTasks, completedTasks, editTasks }) => {
  return (
    <>
      <Text style={styles.incompleteAndCompleted}>{incompleteTasks.length} incomplete, {completedTasks.length} completed</Text>
      <View style={styles.divider} />
      
      <ScrollView style={styles.scrollView} stickyHeaderIndices={[0, 2]}>
        <View>
          <Text style={styles.state}>Incomplete</Text>
        </View>
        <TaskStateList stateTitle="Incomplete" data={incompleteTasks} editTasks={editTasks} />

        <View>
          <Text style={styles.state}>Completed</Text>
        </View>
        <TaskStateList stateTitle="Completed" data={completedTasks} editTasks={editTasks} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  incompleteAndCompleted: {
    marginTop: 5,
    fontSize: 14,
    color: '#575767',
    fontWeight: '600',
  },
  divider: {
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 2,
    marginVertical: 10
  },
  scrollView: {
    marginBottom: 50
  },
  state: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#575767',
    lineHeight: 18,
  },
});

export default RenderTasks