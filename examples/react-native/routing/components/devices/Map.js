import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Alert, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([
    {
      location: {latitude: 37.78825, longitude: -122.4324},
      title: "My Marker",
      description: "Some description"
    }
  ]);

  useEffect(() => {
    const requestLocationPermission = async() => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if(status !== 'granted') {
        Alert.alert('No tienes permisos para acceder a la ubicación');
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      setLocation(location)

      const myHouse = {
        title: "My house",
        description: "This best house",
        location: {latitude, longitude}
      }

      setMarkers([...markers, myHouse])
    }

    requestLocationPermission()
  }, [])

  return(
    <View style={styles.container}>
      <MapView style={styles.map}>
        {
          markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={
                {
                  latitude: marker.location.latitude,
                  longitude: marker.location.longitude
                }
              }
              title={marker.title}
              description={marker.description}
            />
          ))
        }
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text: {
    color: '#fff',
    fontSize: 30,
  }
})

export default MapScreen