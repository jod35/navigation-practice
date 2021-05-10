import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Messages from './Messages'


const Tab = createStackNavigator();



export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('About')} title="About Page" />
            <View>
                <Tab.Navigator>
                    <Tab.Screen name="messages" component={Messages} />
                </Tab.Navigator>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

