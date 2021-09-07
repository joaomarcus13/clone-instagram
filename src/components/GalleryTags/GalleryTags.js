import React from 'react';
import { Text, View, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

export default function GalleryTags() {
  return (
    <View
      style={{
        flex: 1,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25,
          width: '50%',
          textAlign: 'center',
          marginBottom: 10,
        }}
      >
        Photos and Videos of You
      </Text>
      <Text
        style={{
          fontSize: 15,
          width: '70%',
          color: 'grey',
          textAlign: 'center',
          lineHeight: 22,
        }}
      >
        When people tag you in photos and videos, they'll appear here.
      </Text>
    </View>
  );
}
