import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { photoProfileDefault } from '../../util/constants';
import * as Styled from './styles';

export default function Post({ data }) {
  const navigation = useNavigation();
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Perfil
          source={{ uri: data.user.photoURL || photoProfileDefault }}
        />
        <Styled.HeaderContent
          onPress={() => {
            navigation.navigate('Profile', { profileId: data.user.uid });
          }}
          activeOpacity={1}
        >
          <Styled.Text.Flex>{data.user.name}</Styled.Text.Flex>
          <Styled.Icons.Dots name="more-vertical" />
        </Styled.HeaderContent>
      </Styled.Header>

      {/* <Image source={{ uri: data.url }} style={styles.image} /> */}
      <FastImage
        style={styles.image}
        source={{
          uri: data.url,
          // headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />

      <Styled.AreaIcons>
        <Styled.Icons.Like name="hearto" />
        <Styled.Icons.Comment
          name="message-circle"
          style={{ transform: [{ rotate: '270deg' }] }}
        />
        <Styled.Icons.Share name="send" />
        <Styled.Icons.BookMark name="bookmark-o" />
      </Styled.AreaIcons>

      <Styled.Description>
        <Styled.Text.Flex>33 likes</Styled.Text.Flex>
        <Styled.DescriptionText>
          <Styled.Text.H1>{data.user.name}</Styled.Text.H1>
          <Styled.Text.H2>{data.caption}</Styled.Text.H2>
        </Styled.DescriptionText>

        <Styled.Text.H3>View all 21 comments</Styled.Text.H3>

        <Styled.AddComment>
          <Styled.Perfil source={data.img} />
          <Styled.Input placeholder="Add a comment..." />
        </Styled.AddComment>

        <Styled.Text.H4>2 minutes ago</Styled.Text.H4>
      </Styled.Description>
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 3,
    resizeMode: 'contain',
  },
});
