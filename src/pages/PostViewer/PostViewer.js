import React from 'react';
import { useSelector } from 'react-redux';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import PostList from '../../components/PostList/PostList';
import * as GStyled from '../../style/global';
export default function PostViewer({ route }) {
  const { index, textHeader, userId } = route.params;

  const posts = useSelector((state) =>
    userId
      ? state.post.posts.filter((p) => p.user.uid === userId)
      : state.post.posts
  );

  return (
    <GStyled.Container>
      <HeaderBack text={textHeader} />
      <PostList posts={posts} index={index} />
    </GStyled.Container>
  );
}
