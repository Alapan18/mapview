import { View, PermissionsAndroid, TouchableOpacity, Text, Image, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { enableLatestRenderer } from 'react-native-maps';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


enableLatestRenderer();
function Home() {
  const customMarker = require('./download.jpeg');
  const navigation = useNavigation();
  const [plat, setplat] = useState(0);
  const [plong, setplong] = useState(0);
  const [region, setRegion] = useState({
    latitude: 0, // Changed the initial latitude to 0
    longitude: 0, // Changed the initial longitude to 0
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'sihcamera App location Permission',
          message:
            'sihcamera App needs access to your location' +
            'so you can take and upload the pictures',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getlocation(); // Fetch the location if permission is granted
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getlocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setplat(position.coords.latitude);
        setplong(position.coords.longitude);
        setRegion({
          ...region,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  function handleZoomIn() {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 0.5,
      longitudeDelta: region.longitudeDelta * 0.5,
    });
  }

  function handleZoomOut() {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ width: '100%', height: '100%' }} region={region} onRegionChange={() => { }}>
        <Marker
          coordinate={{ latitude: plat, longitude: plong }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Image source={customMarker} style={{ width: 40, height: 40 }} />
        </Marker>
      </MapView>

      {/* Modal to display the custom image on marker press */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={customMarker} style={{ width: 200, height: 200 }} />
          <Text style={{ color: 'black' }}>{plat}</Text>
          <Text style={{ color: 'black' }}>{plong}</Text>
        </View>
      </Modal>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          alignSelf: 'flex-end',
          position: 'absolute',
          bottom: 140,
          right: 25,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleZoomIn}
      >
        <Icon name='search-plus' type='font-awesome' size={30} color='grey' />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          alignSelf: 'flex-end',
          position: 'absolute',
          bottom: 90,
          right: 25,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleZoomOut}
      >
        <Icon name='search-minus' type='font-awesome' size={30} color='grey' />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          alignSelf: 'flex-end',
          position: 'absolute',
          bottom: 40,
          right: 25,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Login')}      >
        <Icon name='upload' type='font-awesome' size={30} color='grey' />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
