import React, { Component } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// map component I used for a previous project

class Map extends Component {
  constructor(props) {
    super(props);
    // hard coded markers just for demo purposes
    this.state = {
      markers: [
        {
          id: 1,
          latitude: 37.78895,
          longitude: -122.4194,
          title: 'First Marker',
          description: 'Testing capabilities',
        },
        {
          id: 2,
          latitude: 43.704540,
          longitude: -72.288986,
          title: 'Dartmouth College',
          description: 'School',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <MapView
          showsUserLocation
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {this.state.markers.map((marker, index) => (
            <Marker
              key={marker.id}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  marker: {
    width: 50,
    height: 70,
  },
});

export default Map;
