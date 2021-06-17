import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const PromotionCard = promotion => {
  return (
    <View key={promotion.id} style={styles.baseView}>
      <View style={styles.imaegBaseView}>
        <Image
          style={styles.coverImage}
          source={{
            uri: 'https://picsum.photos/300/200',
          }}
        />
        <View style={styles.blackOpacityView} />
        <View style={styles.descriptionBaseView}>
          <Text numberOfLines={1} style={styles.descriptionText}>
            {promotion.description}
          </Text>
        </View>
      </View>
      <View style={styles.highlightsBaseView}>
        <View style={styles.promotionTypeView}>
          <Text style={styles.promotionTypeText}>
            {promotion.promotionType}
          </Text>
        </View>
        <View style={styles.promotionCardTypeView}>
          <Text style={styles.promotionCardTypeText}>
            {promotion.promotionCardType}
          </Text>
        </View>
        <View style={styles.promotionDateView}>
          <Text style={styles.promotionDateText}>{promotion.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseView: {
    backgroundColor: '#F4F9FE',
    marginBottom: 20,
    borderRadius: 10,
  },
  imaegBaseView: {
    width: '100%',
    height: 120,
    borderRadius: 15,
    backgroundColor: 'gray',
  },
  coverImage: {
    height: 120,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  blackOpacityView: {
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.3,
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  descriptionBaseView: {
    position: 'absolute',
    width: '100%',
    height: 120,
    backgroundColor: 'transparent',
    padding: 10,
    justifyContent: 'flex-end',
  },
  descriptionText: {
    color: 'white',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: 18,
  },
  highlightsBaseView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  promotionTypeView: {
    backgroundColor: '#C53C2E',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  },
  promotionTypeText: {
    color: 'white',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: 14,
  },
  promotionCardTypeView: {
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  },
  promotionCardTypeText: {
    color: 'white',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: 14,
  },
  promotionDateView: {
    backgroundColor: '#C0FD6F',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  },
  promotionDateText: {
    color: 'black',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: 14,
  },
});

export default PromotionCard;
