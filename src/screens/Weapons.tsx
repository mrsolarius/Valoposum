import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';

export class Weapons extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Weapons'} imageUrl={''} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
