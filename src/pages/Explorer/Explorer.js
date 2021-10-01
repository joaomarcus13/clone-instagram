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
  TouchableOpacity,
} from 'react-native';
import Search from '../../components/Search/Search';
import FastImage from 'react-native-fast-image';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import * as Styled from './styles';

import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

function ImageExplorer({ item, index }) {
  const navigation = useNavigation();
  function handlePostViewer() {
    navigation.navigate('PostViewer', { index, textHeader: 'Explore' });
  }
  return (
    <TouchableOpacity
      onPress={handlePostViewer}
      style={{
        margin: 1,
        flexDirection: 'row',
      }}
    >
      <FastImage
        style={{
          width: width / 3,
          height: width / 3,
        }}
        source={{ uri: item.url }}
      />
    </TouchableOpacity>
  );
}

export default function Explorer() {
  const renderItem = ({ item, index }) => (
    <ImageExplorer item={item} index={index} />
  );

  const posts = useSelector((state) => state.post.posts);

  return (
    <Styled.Container>
      <Search />
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
