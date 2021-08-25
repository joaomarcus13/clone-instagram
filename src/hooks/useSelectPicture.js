import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

export default function useSelectPicture() {
  const [image, setImage] = useState(null);

  const handlelaunchLibrary = () => {
    const options = {
      mediaType: 'mixed',
      includeBase64: true,
    };
    const callback = ({ didCancel, errorCode, errorMessage, assets }) => {
      if (!didCancel) {
        // console.log(assets[0]);
        setImage(assets[0].base64);
      }
    };
    launchImageLibrary(options, callback);
  };

  return {
    handlelaunchLibrary,
    image,
    setImage,
  };
}
