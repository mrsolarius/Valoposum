import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
class NavBar extends React.Component<{
  title: string;
}> {
  render() {
    let {title} = this.props;
    return (
      <View style={styles.navbar}>
        <Text style={styles.text}>{title}</Text>
        <Button title={title} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    paddingBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default NavBar;
