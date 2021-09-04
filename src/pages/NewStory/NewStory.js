import React from 'react';
import Camera from '../../components/Camera/Camera';
import { useNavigation } from '@react-navigation/native';
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
          openGalery={() => {
            handlelaunchLibrary();
          }}
          takedImage={image}
          callback={(img) => {
            setImage(img);
          }}
        />
      )}
    </>
  );
}
