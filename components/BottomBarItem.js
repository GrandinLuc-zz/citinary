import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

export function BottomBarItem({style, imagestyle, source, texte}) {
  return (
      <TouchableOpacity style={[styles.cadre, style]}>
        <Image resizeMode='contain' style={[styles.area,imagestyle]} source={source}/>
        <Text style={styles.text}>{texte}</Text>
      </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  area:{
      flex: 1,
  },
  cadre: {
    
  },
  text:{

  },
})