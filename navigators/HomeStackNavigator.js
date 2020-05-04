import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, BackHandler, ToastAndroid} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer, NavigationEvents} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {RouteScreen} from '../Tabs/RouteScreen'
import {ProfileScreen} from '../Tabs/ProfileScreen'
import {MapScreen} from '../Tabs/MapScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-vector-icons/Ionicons'
import {Ionicons} from '@expo/vector-icons'
import {TabBarIcon} from '../components/TabBarIcon'



const BottomTab = createBottomTabNavigator();

export class HomeStackNavigator extends React.Component {
  
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
    return (
    
      <BottomTab.Navigator 
        initialRouteName={"Home"}
        options = {{
          
          navigationOptions: ({ navigation }) => { 
            const enableGestures = navigation.getParam("enableGestures", false); 
            return { enableGestures } }
        }
          
        }
      
      >
        
        <BottomTab.Screen
          name="Map"
          component={MapScreen}
          options={{
            title: 'Carte',
            navigationOptions: ({ navigation }) => { 
              const enableGestures = navigation.getParam("enableGestures", false); 
              return { enableGestures } }
          }}
        />
        <BottomTab.Screen
          name="Routes"
          component={RouteScreen}
          
          options={{
            title: 'Parcours',
            navigationOptions: ({ navigation }) => { 
              const enableGestures = navigation.getParam("enableGestures", false); 
              return { enableGestures } }
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            navigationOptions: ({ navigation }) => { 
              const enableGestures = navigation.getParam("enableGestures", false); 
              return { enableGestures } }
          }}
        />
        
      </BottomTab.Navigator>
    );
  }

  
}
