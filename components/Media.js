import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, TouchableWithoutFeedback, FlatList, TextInput, TouchableOpacity} from 'react-native';

export function Media({style, imagestyle, source}) {
  return (
      <TouchableOpacity style={[styles.cadre, style]}>
        <Image resizeMode='contain' style={[styles.area,imagestyle]} source={source}/>
      </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  area:{
      flex: 1,
      
  },
  cadre: {
    
  },
})