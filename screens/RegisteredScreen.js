import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Heading } from '../components/Heading';
import {FilledButton} from '../components/FilledButton'



export function RegisteredScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Registered !</Heading>
      <FilledButton style={styles.bouton} 
      textstyle={styles.textstyle} 
      title={'Yeeeeees'} 
      onPress={() => {
        {navigation.navigate('Home') }
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