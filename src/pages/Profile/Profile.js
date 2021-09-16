/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import * as Styled from './styles';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { nameIcons } from '../../style/icons';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import NavGalleries from '../../components/NavGalleries/NavGalleries';
import GalleryPosts from '../../components/GalleryPosts/GalleryPosts';
import GalleryTags from '../../components/GalleryTags/GalleryTags';
import { photoProfileDefault } from '../../util/constants';
import { useEffect } from 'react';
import { follow, unfollow } from '../../store/actions/user';
import api from '../../services/api';
import { useCallback } from 'react';
import Loading from '../../components/PageLoading/PageLoading';
import { useDispatch } from 'react-redux';

export default function Profile({ route }) {
  // console.log('props', route);

  let myProfile = true;
  let isFollow = false;
  const profileId = route?.params?.profileId || null;
  const navigation = useNavigation();
  const { uid, username, name, photoURL, following, followers } = useSelector(
    (state) => state.user
  );
  if (profileId) {
    myProfile = profileId === uid;
  }
  const [profileUser, setProfileUser] = useState({});
  const userPosts = useSelector((state) => {
    return profileId
      ? state.post.posts.filter((p) => p.user.uid === profileId)
      : state.post.posts.filter((p) => p.user.uid === uid);
  });
  const dispatch = useDispatch();

  isFollow = following.includes(profileId);

  function handleFollow() {
    isFollow
      ? dispatch(unfollow({ uid, profileId }))
      : dispatch(follow({ uid, profileId }));
  }

  const getUser = useCallback(async () => {
    const userProfile = await api.getUser(profileId);

    setProfileUser(userProfile);
  }, [profileId]);

  useEffect(() => {
    if (!myProfile) {
      getUser();
    }
  }, [getUser, myProfile]);

  return (
    <Styled.Container>
      {profileId ? (
        <HeaderBack text={myProfile ? username : profileUser?.username} />
      ) : (
        <Styled.Header>
          <Styled.Text.Header>
            {myProfile ? username : profileUser.username}
          </Styled.Text.Header>
          <Styled.IconsHeader>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('NewPost');
              }}
            >
              <Styled.Icons.AddPost name={nameIcons.addPost} />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                navigation.toggleDrawer();
              }}
            >
              <Styled.Icons.Menu name="menu" />
            </TouchableWithoutFeedback>
          </Styled.IconsHeader>
        </Styled.Header>
      )}

      {userPosts ? (
        <>
          <Styled.Information>
            <Styled.ViewImageProfile>
              <Styled.ImageProfile
                source={{
                  uri: myProfile
                    ? photoURL
                    : profileUser.photoURL || photoProfileDefault,
                }}
              />

              <Styled.ViewNumbers>
                <Styled.ViewEachNumbers>
                  <Styled.Text.H1>{userPosts.length}</Styled.Text.H1>
                  <Styled.Text.H2>Posts</Styled.Text.H2>
                </Styled.ViewEachNumbers>
                <Styled.ViewEachNumbers>
                  <Styled.Text.H1>
                    {myProfile
                      ? followers.length || '0'
                      : profileUser.followers?.length || '0'}
                  </Styled.Text.H1>
                  <Styled.Text.H2>Followers</Styled.Text.H2>
                </Styled.ViewEachNumbers>
                <Styled.ViewEachNumbers>
                  <Styled.Text.H1>
                    {myProfile
                      ? following.length || '0'
                      : profileUser.following?.length || '0'}
                  </Styled.Text.H1>
                  <Styled.Text.H2>Following</Styled.Text.H2>
                </Styled.ViewEachNumbers>
              </Styled.ViewNumbers>
            </Styled.ViewImageProfile>
            <Styled.Text.Profile>
              {myProfile ? name : profileUser.name}
            </Styled.Text.Profile>
          </Styled.Information>

          {myProfile ? (
            <Styled.ViewButton>
              <Styled.Button bg={true}>
                <Styled.Text.EditProfile>Edit Profile</Styled.Text.EditProfile>
              </Styled.Button>
            </Styled.ViewButton>
          ) : (
            <Styled.ViewButton>
              <Styled.Button bg={isFollow} onPress={handleFollow}>
                <Styled.Text.EditProfile>
                  {isFollow ? 'following' : 'follow'}
                </Styled.Text.EditProfile>
              </Styled.Button>
              <Styled.Button bg={true}>
                <Styled.Text.EditProfile>message</Styled.Text.EditProfile>
              </Styled.Button>
            </Styled.ViewButton>
          )}

          <NavGalleries
            tabs={[
              {
                icon: <Styled.Icons.Posts name={nameIcons.grid} />,
                component: <GalleryPosts posts={userPosts} />,
              },
              {
                icon: <Styled.Icons.UserTag name={nameIcons.userTag} />,
                component: <GalleryTags />,
              },
            ]}
          />
        </>
      ) : (
        <Loading />
      )}
    </Styled.Container>
  );
}
