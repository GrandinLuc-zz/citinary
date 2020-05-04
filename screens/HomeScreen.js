import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions, TabBarIOS} from 'react-native';
import { Heading } from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton'
import {Media} from '../components/Media'
import {ImageButton} from '../components/ImageButton'
import {Error} from '../components/Error'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';


export function HomeScreen({navigation}) {
  return (
    <ImageBackground source={require('../assets/lien.png')} style={styles.container}>  
        <View style={{flex:1, height: '80%'}}>
          <Heading style={styles.title}>Home Sweet Home</Heading>
        </View>
        <View nativeID={'HomeButtonView'} style={styles.canvasContainer}>
          <Media imagestyle={{ width: '50%', flex: 1}} style={styles.canvas} source={require('../assets/map.png')}/>
          <Media imagestyle={{ width: '50%', flex: 1}} style={styles.canvas} source={require('../assets/home.png')}/>
          <Media imagestyle={{ width: '50%', flex: 1}} style={styles.canvas} source={require('../assets/settings.png')}/>
          <Media imagestyle={{ width: '50%', flex: 1}} style={styles.canvas} source={require('../assets/logout.png')}/>
      </View> 
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row"
  },
  container: {
    flex: 1,
  },
  cadre: {
    width: '20%',
    height:'100%',
  },
  title: {
    marginTop: '20%',
    marginBottom: 50,
    textAlign: 'center',
    alignItems: 'stretch',
  },
  centralPart: {
    backgroundColor: 'red',
  },
  bottomMenu: {
      backgroundColor: 'white',
      flexDirection: 'row',
      width: '100%',
      aspectRatio: 1 / 2,
  },
  canvasContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white'

  },
  canvas: {
    width: '20%',
    height: Dimensions.get('window').width/5,
    alignContent: 'center',
    justifyContent: 'center',
    margin: '3%'
  },
})