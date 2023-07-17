import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import CreateTask from './src/screens/CreateTask';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Create" component={HomeScreen}/>
    </Stack.Navigator>
  );
}

export default App = () =>  {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}