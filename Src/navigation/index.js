import React from  'react';
import {View, Text} from 'react-native';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home/Home';
import Details from '../screens/Home/Details';
import  {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Navigation =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
 
    )
    
}

export default Navigation;
