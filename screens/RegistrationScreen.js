import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Heading } from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton'


export function RegistrationScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Registration</Heading>
      <Input style={styles.input} placeholder={'Name'}/>
      <Input style={styles.input} placeholder={'Surname'}/>
      <Input style={styles.input} placeholder={'Phone number'} keyboardType={'phone-pad'}/>
      <Input style={styles.input} placeholder={'Email'} keyboardType={'email-address'}/>
      <Input style={styles.input} placeholder={'Password'} secureTextEntry />

      <FilledButton style={styles.bouton} 
      title={'Sign In'} 
      onPress={() => {
        navigation.navigate('HomeStack', { screen: 'Home' })

        // Lancer la fonction

      }}/>
      <FilledButton style={styles.accountalready} 
      textstyle={styles.textstyle} 
      title={'I already have an account'} 
      onPress={() => {
        navigation.pop()
      }}/>


    </View>
  );
}


const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row"
  },
  title: {
    marginTop: 20,
    marginBottom: 50,
  },
  input: {
    marginVertical: 5,
  },
  bouton: {
    marginTop: 20,
    marginBottom: 5,
  },
  accountalready:{
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    alignItems: 'center',
  },
  
})