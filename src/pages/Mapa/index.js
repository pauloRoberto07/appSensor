import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native';
import {Marker} from 'react-native-maps';

import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  Geolocation.getCurrentPosition(
    pos => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    },
    error => Alert.alert('Erro', error.message),
    {
      enableHighAccuracy: true, timeout: 8000, maximumAge: 1000,
    },
  );

  return (
    <View>
      <MapView
        style={style.mapStyle}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title={'Marcador'}
          description={'Testando'}
        />
      </MapView>
    </View>
  );
}

const style = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
});
