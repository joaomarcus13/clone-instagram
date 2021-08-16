import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Search from '../../components/Search/Search';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import * as Styled from './styles';
import testeImg from '../../assets/images/615340.jpg';
import testeImg2 from '../../assets/images/rm.jpg';
import testeImg4 from '../../assets/images/a.jpg';
import testeImg5 from '../../assets/images/b.jpg';
import testeImg6 from '../../assets/images/c.jpg';
import testeImg7 from '../../assets/images/d.jpg';
import testeImg8 from '../../assets/images/e.jpg';
import testeImg3 from '../../assets/images/gorillazstylo-157898.jpeg';
const data = [
  {
    id: 1,
    img: testeImg,
    author: 'joaomarcus13',
    likes: 20,
    description: 'image of testing component post',
  },
  {
    id: 2,
    img: testeImg2,
    author: 'rick123',
    likes: 20,
    description: 'image of testing component post',
  },
  {
    id: 3,
    img: testeImg3,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
  {
    id: 4,
    img: testeImg4,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
  {
    id: 5,
    img: testeImg5,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
  {
    id: 6,
    img: testeImg6,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
  {
    id: 7,
    img: testeImg7,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
  {
    id: 8,
    img: testeImg8,
    author: 'gorillaz',
    likes: 203,
    description: 'image of testing component post',
  },
];

function ImageExplorer({ item, index }) {
  return (
    <View
      style={{
        margin: 1,
        flexDirection: 'row',
      }}
    >
      <Image
        style={{
          width: width / 3,
          height: width / 3,
        }}
        source={item.img}
      />
    </View>
  );
}

//remover
// const theme = themes.darkTheme;
export default function Explorer() {
  console.log(width);
  console.log(height);
  const renderItem = ({ item, index }) => (
    <ImageExplorer item={item} index={index} />
  );
  return (
    <Styled.Container>
      <Search />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </Styled.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
