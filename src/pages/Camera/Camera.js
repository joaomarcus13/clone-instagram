import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import testeimage from '../../assets/images/a.jpg';
import { RNCamera } from 'react-native-camera';
import * as Styled from './styles';
import ModalSendImage from '../../components/SendImage/SendImage';
import { useNavigation } from '@react-navigation/native';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      width: '100%',
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export default function Explorer() {
  const navigation = useNavigation();
  const typesCamera = {
    front: RNCamera.Constants.Type.front,
    back: RNCamera.Constants.Type.back,
  };
  const optionsFlash = {
    on: RNCamera.Constants.FlashMode.on,
    off: RNCamera.Constants.FlashMode.off,
  };

  const [cameraType, setCameraType] = useState(typesCamera.back);
  const [flash, setFlash] = useState(optionsFlash.off);
  const [imageToSave, setImageToSave] = useState(null);
  const [takedImage, settakedImage] = useState(null);

  const takePicture = async function (camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //eslint-disable-next-line
    console.log(data.base64.substr(0, 100));
    settakedImage('data:image/jpg;base64,' + data.base64);
  };

  const handleCameraType = () => {
    setCameraType(
      cameraType === typesCamera.front ? typesCamera.back : typesCamera.front
    );
  };
  const handleFlash = () => {
    setFlash((state) =>
      state === optionsFlash.on ? optionsFlash.off : optionsFlash.on
    );
  };

  const handlelaunchLibrary = () => {
    const options = {
      mediaType: 'mixed',
      includeBase64: true,
    };
    const callback = ({ didCancel, errorCode, errorMessage, assets }) => {
      if (!didCancel) {
        setImageToSave({
          image: {
            uri: assets[0].uri,
            base64: assets[0].base64,
          },
        });
      }
      // console.log(assets);
      // console.log(assets[0].base64);
    };
    launchImageLibrary(options, callback);
  };
  return (
    <Styled.Container>
      {takedImage ? (
        <ModalSendImage image={takedImage} cancel={settakedImage} />
      ) : (
        <RNCamera
          style={styles.preview}
          type={cameraType}
          flashMode={flash}
          // pictureSize={'1000x800'}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') {
              return <PendingView />;
            }
            return (
              <>
                <Styled.Header>
                  <Styled.Settings name="settings-sharp" />
                  <TouchableWithoutFeedback onPress={handleFlash}>
                    <Styled.Flash
                      name={flash === optionsFlash.on ? 'flash' : 'flash-off'}
                    />
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Styled.Close name="close" />
                  </TouchableWithoutFeedback>
                </Styled.Header>

                <Styled.ViewCapture>
                  <Styled.Border>
                    <Styled.CaptureButton onPress={() => takePicture(camera)} />
                  </Styled.Border>
                </Styled.ViewCapture>

                <Styled.Footer>
                  <TouchableOpacity onPress={handlelaunchLibrary}>
                    <Styled.Galery name="ios-image-outline" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleCameraType}>
                    <Styled.SwitchCamera name="camera-reverse" />
                  </TouchableOpacity>
                </Styled.Footer>
              </>
            );
          }}
        </RNCamera>
      )}
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
