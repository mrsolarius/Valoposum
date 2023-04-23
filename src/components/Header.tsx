import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class Header extends React.Component<{title: string; imageUrl: string}> {
  render() {
    let {title, imageUrl} = this.props;
    return (
      <View style={styles.header}>
        {/*<Image style={styles.image} source={{uri: imageUrl}} />*/}
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;