import { Provider } from 'react-redux';
import store from './Store/store';
import Home from './Screens/Home';
import MapScreen from './Screens/MapScreen';
import EatScreen from './Screens/EatScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const App = () => {

  const Stack = createStackNavigator();

  return (
    
    <Provider store={store}>
      
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTransparent: true, title: ""}}>
          <Stack.Screen name='HomeScreen' component={Home} />
          <Stack.Screen name='MapScreen' component={MapScreen} />
          <Stack.Screen name='EatScreen' component={EatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
    </Provider>
  );
}


export default App;