import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/home"
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
import { enableLatestRenderer } from 'react-native-maps';
import Login from './screens/login';
import Upload from './screens/upload';
import StartupScreen from './screens/startup';
enableLatestRenderer();
const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="startup" component={StartupScreen} options={ {headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={ {headerShown: false}} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Upload" component={Upload}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;