import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, TouchableWithoutFeedback, FlatList, ToastAndroid} from 'react-native';
import { Heading } from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton'
import {Media} from '../components/Media'
import {ImageButton} from '../components/ImageButton'
import {Error} from '../components/Error'



export function LoginScreen({navigation}) {

  let autorisationLogin = false
  let email = null
  let password = null
  


  return (
    <View style={styles.container}>
      {/* 
      Retravailler l'implémentation du logo
      <Image style={styles.area} source={require('../assets/icon.png')}/>
      */} 
      <Image
        resizeMode="contain"
        style={{width: '30%', flex: 1}}
        source={require('../assets/icon.png')}
         /> 
      <Error error={''}></Error>
      {/* <Heading style={styles.title}>Citinary</Heading> */}
      <Input 
        style={styles.input} placeholder={'Email'} 
        keyboardType={'email-address'}
        onChangeText={text => email = text} />

      <Input 
        style={styles.input} placeholder={'Password'} 
        secureTextEntry
        onChangeText={text => password = text} />
      <FilledButton style={styles.bouton} 
      title={'Login'} 
      onPress={() => {
        // On vérifie que l'email et le mdp soient bons avant de se connecter

        // Fonction à faire pour determiner si la combinaison email / mdp est valide
        if(email === 'email@test.com' && password === 'motdepasse')
        {
          autorisationLogin = true
        }
        else{
          autorisationLogin = false
        }


        if(autorisationLogin === true){
          navigation.navigate('HomeStack', { screen: 'Home' })
        }
        else{
          ToastAndroid.show('Wrong email and/or password', ToastAndroid.SHORT);
        }


      } }/>
      <ImageButton 
        title={'Sign in with google'}
        source={require('../assets/google.png')}
        style={styles.googleregister}/>
      <FilledButton style={styles.register} 
      textstyle={styles.textstyle} 
      title={"Don't have an account? \nRegister now!"}
      onPress={() => {
        navigation.navigate('Registration')
      }}
       />
      
      <View style={styles.row}>
        <Media resizeMode= 'contains' 
        imagestyle={{borderRadius: 15, width: '100%', flex: 1}} 
        style={styles.icon} source={require('../assets/facebook.png')}/>

        <Media imagestyle={{borderRadius: 15, width: '100%', flex: 1}}  
        style={styles.icon} source={require('../assets/instagram.png')}/>
        
        <Media imagestyle={{borderRadius: 15, width: '100%', flex: 1}}  
        style={styles.icon} source={require('../assets/twitter.png')}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row"
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    marginBottom: 50,
  },
  input: {
    marginVertical: 5,
  },
  area: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'black',
  },
  instyle: {
    backgroundColor: 'black'
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 30,
  },
  bouton: {
    marginTop: 20,
    marginBottom: 5,
    height: '10%'
  },
  googleregister: {
    marginTop: 10,
    backgroundColor: '#dd4b39',
    height: '10%',
  },
  register:{
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  textstyle:
  {
    color: 'orange',
    textAlign: 'center',

  },
  logo:{
    width: '20%',
    
    marginBottom: 5,
  },
  canvasContainer: {
    flex:1,
    width: '30%',
    alignItems: 'stretch'
  },
  canvas: {
      flex:1,
  },
})