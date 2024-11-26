import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, Button, Modal } from "react-native";
import React, { useState } from "react";


const Upload = () => {
  const [selectimage, setselectimage] = useState('');
  const [textEntry, setTextEntry] = useState('');
  const [showModal, setShowModal] = useState(false);

  const ImagePicker = (source) => {
    let options = {
      storageOptions: {
        path: "Image"
      }
    };
    if (source === 'camera') {
      launchCamera(options, response => {
        setselectimage(response.assets[0].uri);
        console.log(response.assets[0].uri);
        setShowModal(false);
      });
    } else {
      launchImageLibrary(options, response => {
        setselectimage(response.assets[0].uri);
        console.log(response.assets[0].uri);
        setShowModal(false);
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Upload"
          onPress={() => setShowModal(true)}
        />

        <Modal
          visible={showModal}
          transparent={true}
          animationType="slide"
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center', width: '80%' }}>
              <TouchableOpacity
                onPress={() => ImagePicker('camera')}
                style={{ padding: 10, width: '100%' }}
              >
                <Text style={{color:'black'}}>Open Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => ImagePicker('gallery')}
                style={{ padding: 10, width: '100%' }}
              >
                <Text style={{color:'black'}}>Upload from Storage</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowModal(false)} // Closing option
                style={{  width: '100%',alignItems:'flex-end',right:4}}
              >
                <Text style={{color: 'green'}}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        {selectimage ? (
          <View style={{ height: 400, width: '100%' }}>
            <Image style={{ height: 400, width: '100%' }} source={{ uri: selectimage }} />
          </View>
        ) : null}

        {selectimage ? (
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              margin: 20,
              paddingLeft: 10
            }}
            onChangeText={text => setTextEntry(text)}
            value={textEntry}
            placeholder="Enter text here"
          />
        ) : null}

        {selectimage ? (
          <Button
            title="Final Upload"
            onPress={() => {
              // Your final upload functionality here
              console.log('Uploading: ', selectimage, textEntry);
            }}
          />
        ) : null}

      </View>
    </SafeAreaView>
  );
}

export default Upload;