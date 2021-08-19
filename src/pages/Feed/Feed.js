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

const data = [
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

function ScrollStories() {
  const renderStory = ({ item }) => <Story data={item} />;
  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AddStory />

        <View style={{ flexDirection: 'row' }}>
          <FlatList
            data={data}
            renderItem={renderStory}
            keyExtractor={(item) => item.img}
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
    database()
      .ref('posts')
      .on('value', (snapshot) => {
        console.log('User data: ', snapshot.val());
        setPosts(Object.values(snapshot.val()));
      });
  }, []);

  console.log(posts);

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
