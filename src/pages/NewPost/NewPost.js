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
import useSelectPicture from '../../hooks/useSelectPicture';
import { useDispatch } from 'react-redux';
import Camera from '../../components/Camera/Camera';

export default function NewPost() {
  const navigation = useNavigation();

  const [next, setNext] = useState(false);
  const [caption, setCaption] = useState('');
  const [openCamera, setOpenCamera] = useState(false);

  const dispatch = useDispatch();
  const { handlelaunchLibrary, image, setImage } = useSelectPicture();

  function handleSendPost() {
    dispatch(
      sendImage({
        image: image,
        fold: 'posts',
        caption,
        navigation,
      })
    );
  }

  return (
    <>
      {openCamera ? (
        <Camera
          fold={'post'}
          // navigation={navigation}
          callback={(img) => {
            setImage(img);
            setOpenCamera(false);
          }}
          openGalery={() => {
            setOpenCamera(false);
          }}
        />
      ) : (
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
                  if (image) {
                    setNext(true);
                  }
                }}
              >
                <Styled.Icons.Next name={nameIcons.next} />
              </Styled.Button>
            )}
          </Styled.Header>

          {next ? (
            <SendPost image={image} useCaption={{ caption, setCaption }} />
          ) : (
            <>
              <Styled.ContainerImage>
                {image ? (
                  <Styled.Image
                    source={{
                      uri: `data:image/jpg;base64,${image}`,
                    }}
                  />
                ) : (
                  <Styled.Text.Info>Choose or take a picture</Styled.Text.Info>
                )}
              </Styled.ContainerImage>
              <Styled.Footer>
                <Styled.Button
                  activeOpacity={0.8}
                  onPress={handlelaunchLibrary}
                >
                  <Styled.Text.Footer>Gallery</Styled.Text.Footer>
                </Styled.Button>
                <Styled.BG
                  onPress={() => {
                    setOpenCamera(true);
                  }}
                >
                  <Styled.Icons.Camera name={nameIcons.camera} />
                </Styled.BG>
              </Styled.Footer>
            </>
          )}
        </Styled.Container>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
