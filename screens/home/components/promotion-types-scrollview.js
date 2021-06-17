import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {promotionTypes} from '../../../static-data/promotion';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  baseView: {
    width: '100%',
    height: 180,
    backgroundColor: '#3E3A9F',
  },
  scrollViewBaseView: {
    height: 130,
    width: '100%',
    justifyContent: 'center',
  },
  scrollViewContent: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  promotionTypeViewBase: {
    marginLeft: 15,
    height: 100,
    width: 70,
  },
  promotionTypeIconViewBase: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  promotionTypeTextViewBase: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  promotionTypeText: {
    color: 'white',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: 10,
  },
});

const PromotionTypeView = type => {
  return (
    <View key={type.name} style={styles.promotionTypeViewBase}>
      <View style={styles.promotionTypeIconViewBase}>
        <Ionicons name={type.icon} size={50} color={'#3C73FF'} />
      </View>
      <View style={styles.promotionTypeTextViewBase}>
        <Text style={styles.promotionTypeText}>{type.name}</Text>
      </View>
    </View>
  );
};

const PromotionTypesVerticalScrollView = () => {
  return (
    <View style={styles.baseView}>
      <View style={styles.scrollViewBaseView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.scrollViewContent}>
          {promotionTypes.map(type => {
            return <PromotionTypeView key={type.name} {...type} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default PromotionTypesVerticalScrollView;
