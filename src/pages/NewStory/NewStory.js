import React, { useState } from 'react';
import Camera from '../../components/Camera/Camera';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import ModalSendImage from '../../components/SendImage/SendImage';
import { sendImage } from '../../store/actions/post';
import { useDispatch } from 'react-redux';
import useSelectPicture from '../../hooks/useSelectPicture';

export default function NewStory() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const { handlelaunchLibrary, image, setImage } = useSelectPicture();

  const handleSendStory = () => {
    dispatch(sendImage({ image: image, fold: 'stories', navigation }));
  };

  return (
    <>
      {image ? (
        <ModalSendImage
          image={image}
          cancel={() => {
            setImage(null);
          }}
          confirm={handleSendStory}
        />
      ) : (
        <Camera
          // fold="stories"
          openGalery={() => {
            handlelaunchLibrary();
          }}
          // navigation={navigation}
          takedImage={image}
          callback={(img) => {
            setImage(img);
          }}
        />
      )}
    </>
  );
}
