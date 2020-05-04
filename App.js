import React, { useState } from 'react';
import {AuthStackNavigator} from './navigators/AuthStackNavigator'
import {HomeStackNavigator} from './navigators/HomeStackNavigator'
import { StyleSheet, Text, View, Button, Alert, ImageBackground, FlatList, BackHandler, ToastAndroid} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const RootStack = createStackNavigator();



export default class App extends React.Component{
    
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }
    
      handleBackButton() {
        //ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
      }

    render() {
        return(
        
        
            <NavigationContainer>
                <RootStack.Navigator screenOptions={{
                    navigationOptions: {
                        gesturesEnabled: false,
                    },
                    headerShown: false,
                }}>
                    <RootStack.Screen name={'RootStack'} component={AuthStackNavigator}/>
                    <RootStack.Screen name={'HomeStack'} component={HomeStackNavigator}/>               
                </RootStack.Navigator>
            </NavigationContainer>
      );
    }
    
    
}


const useEffect = (() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true)
  }, [])
