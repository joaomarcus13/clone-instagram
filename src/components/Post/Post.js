import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import * as Styled from './styles';

export default function Post({ data }) {
  return (
    <Styled.Container style={styles.container}>
      <Styled.Header style={styles.header}>
        <Styled.Perfil source={data.img} style={styles.perfil} />
        <Styled.Text.Flex style={styles.authorName}>
          {data.author}
        </Styled.Text.Flex>
        <Styled.Icons.Dots name="more-vertical" />
      </Styled.Header>

      <Image source={data.img} style={styles.image} />

      <Styled.AreaIcons style={styles.areaIcons}>
        <Styled.Icons.Like name="hearto" />
        <Styled.Icons.Comment
          name="message-circle"
          style={{ transform: [{ rotate: '270deg' }] }}
        />
        <Styled.Icons.Share name="send" />
        <Styled.Icons.BookMark name="bookmark-o" />
      </Styled.AreaIcons>

      <Styled.Description style={styles.description}>
        <Styled.Text.Flex>{data.likes} likes</Styled.Text.Flex>
        <Styled.DescriptionText>
          <Styled.Text.H1>{data.author}</Styled.Text.H1>
          <Styled.Text.H2>{data.description}</Styled.Text.H2>
        </Styled.DescriptionText>

        <Styled.Text.H3>View all 21 comments</Styled.Text.H3>

        <Styled.AddComment style={styles.addComment}>
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
    resizeMode: 'cover',
  },
});
