import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar, TouchableWithoutFeedback, FlatList, TouchableOpacity} from 'react-native';

export function ImageButton({title, style, onPress, source}) {
    return (
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
          <View style={styles.row}>
            <Image style={styles.area} source={source}/>
            <Text style={styles.text}>{title}</Text>
          </View>
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
    row: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
    },
    area:{
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 15,
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    }
  })
