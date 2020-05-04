import React from 'react';
import { StyleSheet, Text, View, Button, Alert, StatusBar, TouchableWithoutFeedback, FlatList} from 'react-native';

export function Heading({children,style, ...props}) {
  return (
    <Text {...props} style={[styles.title, style]}>
        {children}
    </Text>
  );
}


const styles = StyleSheet.create({
  title:{
      fontSize: 32,
      color: 'black',
      textShadowColor: 'white',
      textShadowOffset: { width: -1, height: 0 },
      textShadowRadius: 15, 
      fontWeight: '800',
      fontSize: 50,
  },
})