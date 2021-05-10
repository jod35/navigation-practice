import 'react-native-gesture-handler'
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import About from './screens/About'


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="About"
          component={About}
          options={{
            title: "About Page",
            headerStyle: {
              backgroundColor: 'red',

            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a new message')}
                title="Go"
              />
            )
          }}


        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})


