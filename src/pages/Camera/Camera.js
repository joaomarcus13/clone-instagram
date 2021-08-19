import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';
import * as Styled from './styles';
import ModalSendImage from '../../components/SendImage/SendImage';
import { useNavigation } from '@react-navigation/native';
import { sendImage } from '../../store/actions/post';
// import storage from '@react-native-firebase/storage';
import { useDispatch } from 'react-redux';
import { nameIcons } from '../../style/icons';

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

export default function Camera() {
  const navigation = useNavigation();
  // const reference = storage().ref('stories');
  const dispatch = useDispatch();

  // const isDrawerOpen = useIsDrawerOpen();
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

    // try {
    //   await reference
    //     .child(`image${Date.now()}`)
    //     .putString(data.base64, 'base64');
    // } catch (error) {
    //   console.log(error);
    // }

    settakedImage(data.base64);
  };

  const confirm = () => {
    dispatch(sendImage({ image: takedImage, fold: 'stories', navigation }));
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
    };
    launchImageLibrary(options, callback);
  };
  return (
    <Styled.Container>
      {takedImage ? (
        <ModalSendImage
          image={takedImage}
          cancel={settakedImage}
          confirm={confirm}
        />
      ) : (
        <Styled.Camera
          // isDrawerOpen={isDrawerOpen}
          style={styles.preview}
          type={cameraType}
          flashMode={flash}
          ratio={'4:4'}
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
                  <Styled.Icons.Settings name={nameIcons.settings2} />
                  <TouchableWithoutFeedback onPress={handleFlash}>
                    <Styled.Icons.Flash
                      name={
                        flash === optionsFlash.on
                          ? nameIcons.flash
                          : nameIcons.flashOff
                      }
                    />
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Styled.Icons.Close name={nameIcons.close} />
                  </TouchableWithoutFeedback>
                </Styled.Header>

                <Styled.ViewCapture>
                  <Styled.Border>
                    <Styled.CaptureButton onPress={() => takePicture(camera)} />
                  </Styled.Border>
                </Styled.ViewCapture>

                <Styled.Footer>
                  <TouchableOpacity onPress={handlelaunchLibrary}>
                    <Styled.Icons.Galery name={nameIcons.galery} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleCameraType}>
                    <Styled.Icons.SwitchCamera name={nameIcons.reverseCamera} />
                  </TouchableOpacity>
                </Styled.Footer>
              </>
            );
          }}
        </Styled.Camera>
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
