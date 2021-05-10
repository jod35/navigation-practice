import React from 'react';
import { View, Text, Button } from 'react-native';

export default function About({ navigation }) {
    return (
        <View>
            <Text>This is the about page</Text>
            <Button onPress={() => navigation.navigate('About')} title="About Page" />
            <Button onPress={() => navigation.push('About')} title="About Page again" />
            <Button onPress={() => navigation.navigate('Home')} title="Home Page" />
            <Button onPress={() => navigation.popToTop()} title="First Page In Stack" />
        </View>
    )
}