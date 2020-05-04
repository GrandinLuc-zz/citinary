import React from 'react';
import { StyleSheet, Text, View, Button, Alert, StatusBar, TouchableWithoutFeedback, FlatList, TouchableOpacity} from 'react-native';

export function FilledButton({title, style, onPress, textstyle}) {
    return (
      <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
          <Text style={[styles.text, textstyle]}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
  
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor: 'orange',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 20,
        borderRadius: 8,   
        borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        color: 'black',
        fontWeight: '500',
        fontSize: 16,
    }
  })
