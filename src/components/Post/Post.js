import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import * as Styled from './styles';

export default function Post({ data }) {
  return (
    <Styled.Container style={styles.container}>
      <Styled.Header style={styles.header}>
        <Styled.Perfil source={data.img} style={styles.perfil} />
        <Styled.H1Top style={styles.authorName}>{data.author}</Styled.H1Top>
        <Styled.Dots name="more-vertical" />
      </Styled.Header>

      <Image source={data.img} style={styles.image} />

      <Styled.AreaIcons style={styles.areaIcons}>
        <Styled.Like name="hearto" />
        <Styled.Comment
          name="message-circle"
          style={{ transform: [{ rotate: '270deg' }] }}
        />
        <Styled.Share name="send" />
        <Styled.BookMark name="bookmark-o" />
      </Styled.AreaIcons>

      <Styled.Description style={styles.description}>
        <Styled.H1Top>{data.likes} likes</Styled.H1Top>
        <Styled.DescriptionText>
          <Styled.H1>{data.author}</Styled.H1>
          <Styled.H2>{data.description}</Styled.H2>
        </Styled.DescriptionText>

        <Styled.H3>View all 21 comments</Styled.H3>

        <Styled.AddComment style={styles.addComment}>
          <Styled.Perfil source={data.img} />
          <Styled.Input placeholder="Add a comment..." />
        </Styled.AddComment>

        <Styled.H4>2 minutes ago</Styled.H4>
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
