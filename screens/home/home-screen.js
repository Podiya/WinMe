import React, {useState, useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  Platform,
  TouchableOpacity,
} from 'react-native';
import HeaderText from './components/header-text';
import PromotionTypesVerticalScrollView from './components/promotion-types-scrollview';
import PromotionCard from './components/promotion-card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {promotions} from '../../static-data/promotion';

const HomeScreen = () => {
  const marginTopAnim = useRef(new Animated.Value(200)).current;
  const [marginTopStarted, setMarginTopStarted] = useState(false);

  const animatedView = {
    backgroundColor: 'white',
    borderTopLeftRadius: Platform.OS === 'android' ? 0 : 20,
    borderTopRightRadius: Platform.OS === 'android' ? 0 : 20,
    top: marginTopAnim,
  };

  const onScrollScrollView = event => {
    const y = event.nativeEvent.contentOffset.y;
    if (y < 200 && !marginTopStarted && y > 0) {
      setMarginTopStarted(true);
      Animated.timing(marginTopAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else if (y < -20) {
      Animated.timing(marginTopAnim, {
        toValue: 200,
        duration: 50,
        useNativeDriver: false,
      }).start(({finished}) => {
        if (finished) {
          setMarginTopStarted(false);
        }
      });
    }
  };

  return (
    <View>
      <View style={styles.topView}>
        <HeaderText headerText={'Promotions'} />
        <PromotionTypesVerticalScrollView />
      </View>
      <Animated.View style={animatedView}>
        <View style={styles.animatedViewHeader}>
          <View style={styles.animatedViewTextWrapper}>
            <Text style={styles.animatedViewText}>Promotions for you</Text>
          </View>
          <TouchableOpacity style={styles.animatedViewHeaderButton}>
            <Ionicons name={'search'} size={25} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.animatedViewHeaderButton}>
            <Ionicons name={'funnel'} size={25} color={'black'} />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onScroll={Platform.OS === 'ios' ? onScrollScrollView : null}
          scrollEventThrottle={1}
          contentContainerStyle={styles.scrollViewContent}>
          {promotions.map(promo => {
            return <PromotionCard key={promo.id} {...promo} />;
          })}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  animatedViewHeader: {
    height: 60,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  animatedViewTextWrapper: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  animatedViewText: {
    color: 'black',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 24,
  },
  animatedViewHeaderButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: '100%',
  },
});

export default HomeScreen;
