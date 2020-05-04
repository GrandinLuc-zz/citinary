import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen'
import {RegistrationScreen} from '../screens/RegistrationScreen'
import {RegisteredScreen} from '../screens/RegisteredScreen'


const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
    return(
        <AuthStack.Navigator screenOptions={{
            headerShown: false,
            navigationOptions: ({ navigation }) => { 
                const enableGestures = navigation.getParam("enableGestures", false); 
                return { enableGestures } }
        }}>
            <AuthStack.Screen name={'Login'} component={LoginScreen}/>
            <AuthStack.Screen name={'Registration'} component={RegistrationScreen}/>
            <AuthStack.Screen name={'Registered'} component={RegisteredScreen}/>
        </AuthStack.Navigator>
  );
}


const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',

    }
  })