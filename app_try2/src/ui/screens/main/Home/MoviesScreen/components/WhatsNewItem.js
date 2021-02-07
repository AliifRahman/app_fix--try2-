import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';

import { Space } from '../../../../../components';
import { uiColor, uiDimen, uiStyle } from '../../../../../constants';

const WhatsNewItem = () => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.imageContainer}>
      <Image
        source={require('../../../../../../assets/dummy/popular.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.metaContainer}>
      <Text numberOfLines={1} style={styles.mainTitle}>
          Abigail pasti bisa gan{' '}
        </Text>
        <View style={styles.metaRating}>
          <IconM name="star" color={uiColor.star} size={14} />
          <Text style={styles.metaRatingText}>7/10</Text>
        </View>
        <Text numberOfLines={4} style={styles.metaTitle}>
        A soldier and his team battle hordes of post apocalyptic zombies in the wastelands of the Korean Peninsula.{' '}
        </Text>
       
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: uiDimen.md,
    marginHorizontal: uiDimen.sm
  },
  image: {
   width: 95,
   height: 134, 
   marginBottom: uiDimen.lg,
   left: uiDimen.lg + uiDimen.sm,
   borderRadius: uiDimen.md,
   position: 'relative',
   zIndex:1
  },
  metaContainer: {
    width: 320,
    height: 125,
    top: uiDimen.md + 4,
    flexDirection: 'column',
    padding: uiDimen.sm,
    backgroundColor: uiColor.accent1,
    opacity: 0.8,
    borderRadius: uiDimen.md,
    left: uiDimen.md,
    justifyContent: 'center',
    position: 'absolute', 
    zIndex: -1
  },
  mainTitle: {
    left : 120,
    ...uiStyle.textSemiBold,
    top: -5
  },
  metaTitle: {
    left : 120,
    ...uiStyle.textSemiBold,
       fontSize: 12,
       width : 175,
       lineHeight: 16,
       top:uiDimen.sm /2
    },
  metaRating: {
    left : 120,
    top: -2,
      flexDirection: 'row', 
      alignItems: 'center'
    },
  metaRatingText: {
      ...uiStyle.textSemiBold, 
      fontSize: 12
    },
});

export default WhatsNewItem;
