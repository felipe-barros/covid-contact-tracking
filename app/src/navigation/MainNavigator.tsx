import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Home from '../screens/Home';

type RootStackParamList = {
  Home: undefined;
};

export type StackProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route?: RouteProp<RootStackParamList, T>;
};

const Stack = createStackNavigator<RootStackParamList>();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
