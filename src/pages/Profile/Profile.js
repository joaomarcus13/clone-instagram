import React from 'react';

import * as Styled from './styles';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { nameIcons } from '../../style/icons';

import NavGalleries from '../../components/NavGalleries/NavGalleries';
import GalleryPosts from '../../components/GalleryPosts/GalleryPosts';
import GalleryTags from '../../components/GalleryTags/GalleryTags';
import { photoProfileDefault } from '../../util/constants';

const myProfile = true;
const following = false;

export default function Profile(props) {
  console.log('props', props);
  const navigation = useNavigation();
  const username = useSelector((state) => state.user.username);
  const name = useSelector((state) => state.user?.displayName || '');
  const photoURL = useSelector((state) => state.user?.photoURL);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Text.Header>{username}</Styled.Text.Header>
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
      <Styled.Information>
        <Styled.ViewImageProfile>
          <Styled.ImageProfile
            source={{ uri: photoURL || photoProfileDefault }}
          />

          <Styled.ViewNumbers>
            <Styled.ViewEachNumbers>
              <Styled.Text.H1>22</Styled.Text.H1>
              <Styled.Text.H2>Posts</Styled.Text.H2>
            </Styled.ViewEachNumbers>
            <Styled.ViewEachNumbers>
              <Styled.Text.H1>380</Styled.Text.H1>
              <Styled.Text.H2>Followers</Styled.Text.H2>
            </Styled.ViewEachNumbers>
            <Styled.ViewEachNumbers>
              <Styled.Text.H1>614</Styled.Text.H1>
              <Styled.Text.H2>Following</Styled.Text.H2>
            </Styled.ViewEachNumbers>
          </Styled.ViewNumbers>
        </Styled.ViewImageProfile>
        <Styled.Text.Profile>{name}</Styled.Text.Profile>
      </Styled.Information>

      {myProfile ? (
        <Styled.ViewButton>
          <Styled.Button bg={true}>
            <Styled.Text.EditProfile>Edit Profile</Styled.Text.EditProfile>
          </Styled.Button>
        </Styled.ViewButton>
      ) : (
        <Styled.ViewButton>
          <Styled.Button bg={following}>
            <Styled.Text.EditProfile>
              {following ? 'following' : 'follow'}
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
            component: <GalleryPosts />,
          },
          {
            icon: <Styled.Icons.UserTag name={nameIcons.userTag} />,
            component: <GalleryTags />,
          },
        ]}
      />
    </Styled.Container>
  );
}
