import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';



export function MapScreen({navigation}) {
    return (
      <View style={styles.container}>
        <MapView
          style={{width: '100%', height: '100%',}}
          initialRegion=
          {{
            latitude: 48.8534,
            longitude: 2.3488,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            <Marker
              coordinate = {{
                latitude: 48.8534,
                longitude: 2.3488,

              }}
            />
        </MapView>
      </View>
    )
  }






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});