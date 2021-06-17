import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderText = ({headerText}) => {
  return (
    <View style={styles.baseView}>
      <View style={styles.textBaseView}>
        <Text style={styles.text}>{headerText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseView: {backgroundColor: '#3E3A9F', height: 70, width: '100%'},
  textBaseView: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20,
  },
  text: {
    color: 'white',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 24,
    textAlignVertical: 'center',
  },
});

export default HeaderText;
