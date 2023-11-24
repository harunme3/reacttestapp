import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splashscreen from '../screen/splashscreen'
import Dashboard from '../screen/dashboard'

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='splash'>
                <Stack.Screen name='splash' component={Splashscreen} options={{headerShown:false}} />
                <Stack.Screen name='dashboard' component={Dashboard} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator