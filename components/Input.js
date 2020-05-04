import React from 'react';
import { StyleSheet, Text, View, Button, Alert, StatusBar, TouchableWithoutFeedback, FlatList, TextInput} from 'react-native';

export function Input({style, ...props}) {
  return (
    <TextInput {...props} style={[style,styles.input]}/>
  );
}


const styles = StyleSheet.create({
  input:{
      backgroundColor: '#eee',
      width:'100%',
      padding: 20,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'black',
  },
})