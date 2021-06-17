/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/home/home-screen';
import TransactionsScreen from './screens/transactions/transactions-screen';
import SchedulesScreen from './screens/schedules/schedules-screen';
import ProfileScreen from './screens/profile/profile-screen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaView1} />
      <SafeAreaView style={styles.safeAreaView2}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = 'home';
                } else if (route.name === 'Transactions') {
                  iconName = 'card';
                } else if (route.name === 'Schedules') {
                  iconName = 'time';
                } else if (route.name === 'Profile') {
                  iconName = 'person';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#3C73FF',
              inactiveTintColor: 'gray',
              showLabel: false,
            }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Transactions" component={TransactionsScreen} />
            <Tab.Screen name="Schedules" component={SchedulesScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  safeAreaView1: {flex: 0, backgroundColor: '#3E3A9F'},
  safeAreaView2: {flex: 1, backgroundColor: 'white'},
});

export default App;
