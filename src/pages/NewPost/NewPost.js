import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Search from '../../components/Search/Search';
import { data } from '../../util/datateste';
import ListChat from '../../components/ListChat/ListChat';
import { useNavigation } from '@react-navigation/native';
import { nameIcons } from '../../style/icons';
import { launchImageLibrary } from 'react-native-image-picker';
import SendPost from '../../components/SendPost/SendPost';
import * as Styled from './styles';
import testeimg from '../../assets/images/a.jpg';
import { sendImage } from '../../store/actions/post';
import { useDispatch } from 'react-redux';

export default function NewPost() {
  const navigation = useNavigation();
  const [imageToSave, setImageToSave] = useState(null);
  const [next, setNext] = useState(false);
  const [caption, setCaption] = useState('');
  const dispatch = useDispatch();

  const handlelaunchLibrary = () => {
    const options = {
      mediaType: 'mixed',
      includeBase64: true,
    };
    const callback = ({ didCancel, errorCode, errorMessage, assets }) => {
      if (!didCancel) {
        // console.log(assets[0]);
        setImageToSave({
          image: assets[0],
        });
      }
    };
    launchImageLibrary(options, callback);
  };

  function handleSendPost() {
    //adicinar hook para esse components
    //adicionar caption no banco real time
    dispatch(
      sendImage({
        image: imageToSave.image.base64,
        fold: 'posts',
        caption,
        navigation,
      })
    );
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Button
          onPress={() => {
            next ? setNext(false) : navigation.goBack();
          }}
        >
          <Styled.Icons.Close name={nameIcons.close} />
        </Styled.Button>
        <Styled.Text.Header>New Post</Styled.Text.Header>
        {next ? (
          <Styled.Button onPress={handleSendPost}>
            <Styled.Icons.Check name={nameIcons.check} />
          </Styled.Button>
        ) : (
          <Styled.Button
            onPress={() => {
              if (imageToSave) {
                setNext(true);
              }
            }}
          >
            <Styled.Icons.Next name={nameIcons.next} />
          </Styled.Button>
        )}
      </Styled.Header>

      {next ? (
        <SendPost
          image={imageToSave.image.base64}
          useCaption={{ caption, setCaption }}
        />
      ) : (
        <>
          <Styled.ContainerImage>
            {imageToSave && (
              <Styled.Image
                source={{
                  uri: `data:image/jpg;base64,${imageToSave.image.base64}`,
                }}
              />
            )}
          </Styled.ContainerImage>
          <Styled.Footer>
            <Styled.Button activeOpacity={0.8} onPress={handlelaunchLibrary}>
              <Styled.Text.Footer>Gallery</Styled.Text.Footer>
            </Styled.Button>
            <Styled.BG>
              <Styled.Icons.Camera name={nameIcons.camera} />
            </Styled.BG>
          </Styled.Footer>
        </>
      )}
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
