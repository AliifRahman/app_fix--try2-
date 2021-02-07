import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {uiDimen, uiStyle} from '../../../../../constants';
import {Space} from '../../../../../components';
import WhatsNewItem from './WhatsNewItem';

const WhatsNew = () => {
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTitle}>What's New</Text>
      </View>
      <Space height={uiDimen.md} />

      <ScrollView vertical>
        <Space width={uiDimen.md} />
        <WhatsNewItem/>
        <WhatsNewItem/>
        <Space width={uiDimen.md} />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    marginHorizontal: uiDimen.lg,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingTitle: {...uiStyle.textSemiBold, fontSize: 16},
  headingLinkText: {...uiStyle.textRegular, fontSize: 12},
});

export default WhatsNew;
