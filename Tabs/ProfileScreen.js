import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Slider,
  TouchableOpacity,
} from 'react-native'
import {FilledButton} from '../components/FilledButton'
import { setConfigurationAsync } from 'expo/build/AR';


export function ProfileScreen({navigation}) {

    const [textValue, setChange] = useState('Tourist');

    return (
      <View style={styles.container}>

        <ScrollView style={styles.scroller}>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.stateButton} onPress={() => {
                if(textValue === 'Tourist') 
                {
                  setChange('Resident')
                }
                else if(textValue === 'Resident'){
                  setChange('Tourist')
                }
                }}>
              <Text style={styles.text}>{textValue}</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.viewSlider}>
            <Text style={styles.sliderText}>Appétance pour les sensations fortes:</Text>
            <Slider value={0.5} style={styles.slider}/>
          </View>
          <View style={styles.viewSlider}>
            <Text style={styles.sliderText}>Parcs et espaces verts</Text>
            <Slider value={0.7} style={styles.slider}/>
          </View>
          <View style={styles.viewSlider}>
            <Text style={styles.sliderText}>Lieux insolites</Text>
            <Slider value={1} style={styles.slider}/>
          </View>
          <View style={styles.viewSlider}>
            <Text style={styles.sliderText}>Bars</Text>
            <Slider value={0.1} style={styles.slider}/>
          </View>
          <View style={styles.viewSlider}>
            <Text style={styles.sliderText}>Restaurants</Text>
            <Slider value={0.3} style={styles.slider}/>
          </View>
          
                    
        </ScrollView>

        <View style={{flex: 1}}>
          <FilledButton
            style={styles.button}
            title={'Disconnect'} 
            onPress={() => {
            navigation.navigate('RootStack', { screen: 'Login' })
            }}
          />
        </View>
        
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scroller: {   
    width: '80%',
    height: '70%',
    backgroundColor: '#DDD',  
    borderRadius: 10,
    marginBottom: '5%',
    marginTop: '25%',
    borderColor: 'black',
    borderWidth: 1,

  },
  sliderText: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  slider: {
    width: '100%',
  },
  viewSlider: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingVertical: '7%',
  },
  button: {
    height: '10%',
  },
  stateButton:{
    width: '70%',
    height: '10%',
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderColor: '#184824',
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#4fb477',
  },
  text: {
    fontSize: 30,
  },
  buttonContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: '10%',
    
  },
});



/* 
<TouchableOpacity style={styles.stateButton} onPress={() => {
                if(textValue === 'Tourist') 
                {
                  setChange('Resident')
                }
                else if(textValue === 'Resident'){
                  setChange('Tourist')
                }
              }}>
  <Text style={styles.text}>{estResident}</Text>
</TouchableOpacity>

*/