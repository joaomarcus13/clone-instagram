import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, View } from 'react-native';
import { Container } from './styles';
import Header from '../../components/Header/Header';

// import themes from '../../style/themes';
import Post from '../../components/Post/Post';
import testeImg from '../../assets/images/615340.jpg';
import testeImg2 from '../../assets/images/rm.jpg';
import testeImg4 from '../../assets/images/a.jpg';
import testeImg5 from '../../assets/images/b.jpg';
import testeImg6 from '../../assets/images/c.jpg';
import testeImg7 from '../../assets/images/d.jpg';
import testeImg8 from '../../assets/images/e.jpg';
import testeImg3 from '../../assets/images/gorillazstylo-157898.jpeg';
import Story from '../../components/Stories/Stories';
import AddStory from '../../components/AddStory/AddStory';

const dataTest = [
  {
    img: testeImg,
    author: 'joaomarcus13',
    likes: 20,
    description: 'image of testing component post',
  },
  {
    img: testeImg2,
    author: 'rick123',
    likes: 20,
    description: 'image of testing component post',
  },
  {
    img: testeImg3,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
  {
    img: testeImg4,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
  {
    img: testeImg5,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
  {
    img: testeImg6,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
  {
    img: testeImg7,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
  {
    img: testeImg8,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
];

import database from '@react-native-firebase/database';
import { useEffect } from 'react';

// {"30vr8h4RvkP1sekJlmHML9ckxLk1":
//  [{"caption": "", "url": "https://firebasestorage.googleapis.com/v0/b/insta-cb066.appspot.com/o/stories%2Fimage1629812847410?alt=media&token=c2de1aed-ca43-443d-b33d-b7a73934e948", "user": [Object]},
//   {"caption": "", "url": "https://firebasestorage.googleapis.com/v0/b/insta-cb066.appspot.com/o/stories%2Fimage1629812833727?alt=media&token=a3c07e45-8a12-4bf2-bb95-a9f5055f469b", "user": [Object]}],

//   "nQYlNfpFUsP7H9wmp4JwPiHiUoN2": [{"caption": "", "url": "https://firebasestorage.googleapis.com/v0/b/insta-cb066.appspot.com/o/stories%2Fimage1629812890819?alt=media&token=88bab1fa-27fe-403d-8121-03eb29f2b889", "user": [Object]}], "zkJT7ZObdqbtMCRFl63SApqlxBI3": [{"caption": "", "url": "https://firebasestorage.googleapis.com/v0/b/insta-cb066.appspot.com/o/stories%2Fimage1629812804899?alt=media&token=ab06f0ce-d5f4-4c70-877f-ce2b556cc037", "user": [Object]}]}

function ScrollStories() {
  const renderStory = ({ item }) => <Story data={item} />;

  const [stories, setStories] = useState([]);

  useEffect(() => {
    const unsubscribe = database()
      .ref('stories')
      .on('value', (snapshot) => {
        const data = {};
        if (snapshot.exists()) {
          // const stories = snapshot.val()
          for (let i of Object.values(snapshot.val())) {
            data.hasOwnProperty(i.user.uid)
              ? data[i.user.uid].push(i)
              : (data[i.user.uid] = [i]);
          }
          setStories(Object.values(data));
          console.log(Object.values(data));
        }
      });
    return () => database().ref('stories').off('value', unsubscribe);
  }, []);
  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AddStory />

        <View style={{ flexDirection: 'row' }}>
          <FlatList
            data={stories}
            renderItem={renderStory}
            keyExtractor={(item) => item[0].user.uid}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function Feed() {
  const renderPost = ({ item }) => <Post data={item} />;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = database()
      .ref('posts')
      .on('value', (snapshot) => {
        // console.log('User data: ', snapshot.val());
        if (snapshot.exists()) {
          setPosts(Object.values(snapshot.val()));
        }
      });
    return () => database().ref('posts').off('value', unsubscribe);
  }, []);

  // console.log(posts);

  return (
    <Container>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View> */}
        {/* <View> */}
        <ScrollStories />
        {/* </View> */}
        <View>
          <FlatList
            data={posts}
            renderItem={renderPost}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {/* </View> */}
      </ScrollView>
    </Container>
  );
}
