/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import useSelectPicture from '../../hooks/useSelectPicture';
import { register } from '../../store/actions/user';

import Camera from '../../components/Camera/Camera';
import * as Styled from './styles';
import { launchImageLibrary } from 'react-native-image-picker';

function Modal({ title, list }) {
  return (
    <Styled.ContainerModal>
      <Styled.Modal>
        <Styled.HeaderModal>
          <Styled.Text.H2>{title}</Styled.Text.H2>
        </Styled.HeaderModal>
        <Styled.ContentModal>
          {list.map((l, i) => (
            <Styled.ItemModal key={i.toString()} onPress={l.action}>
              <Styled.Text.H3>{l.name}</Styled.Text.H3>
            </Styled.ItemModal>
          ))}
        </Styled.ContentModal>
      </Styled.Modal>
    </Styled.ContainerModal>
  );
}

export default function SignUpAddPhotoProfile({ route }) {
  // console.log(route);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const [photo, setPhoto] = useState(null);

  // const [loading, setLoading] = useState(false);
  const { handlelaunchLibrary, image } = useSelectPicture();
  const { loading, msg } = useSelector((state) => state.application);

  function handleAddPhoto() {
    console.log('open modal');
    setModal(true);
  }

  function handleRegister() {
    setOpenCamera(false);

    const photoProfile = photo ?? image;

    setModal(false);
    dispatch(
      register({
        email: route.params.email,
        name: route.params.name,
        password: route.params.password,
        photoProfile: photoProfile,
        fold: 'profile',
        navigation,
      })
    );
  }

  useEffect(() => {
    image && handleRegister();
    photo && handleRegister();
  }, [image, photo]);

  return (
    <>
      {loading && <Loading text={msg} />}
      {openCamera ? (
        <Camera
          callback={(img) => {
            setPhoto(img);
          }}
          openGalery={launchImageLibrary}
        />
      ) : (
        <Styled.Container>
          {modal && (
            <Modal
              title="Change Profile Photo"
              list={[
                {
                  name: 'Take Photo',
                  action: () => {
                    setOpenCamera(true);
                    setModal(false);
                  },
                },
                {
                  name: 'Choose From Library',
                  action: () => {
                    handlelaunchLibrary();
                  },
                },
              ]}
            />
          )}
          <Styled.ContainerComponent>
            <Styled.ViewLogo>
              <Styled.LogoCamera />
            </Styled.ViewLogo>
            <Styled.Text.H1>Add profile photo</Styled.Text.H1>
            <Styled.Button onPress={handleAddPhoto} activeOpacity={0.8}>
              <Styled.Text.Button>Add a Photo</Styled.Text.Button>
            </Styled.Button>

            <Styled.Button
              type="skip"
              onPress={() => {
                setPhoto(';;;;;');
              }}
            >
              <Styled.Text.Button type="skip">Skip</Styled.Text.Button>
            </Styled.Button>
          </Styled.ContainerComponent>
        </Styled.Container>
      )}
    </>
  );
}
