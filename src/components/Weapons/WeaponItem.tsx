import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Weapon} from '../../services/models/volorant-weapon';

interface WeaponItemProps {
  weapon: Weapon;
  onClick: (weapon: Weapon) => void;
}

function WeaponItem(props: WeaponItemProps) {
  const [iconWidth, setIconWidth] = useState(1);
  const [iconHeight, setIconHeight] = useState(1);
  const {weapon, onClick} = props;

  const desiredHeight = 50;

  Image.getSize(weapon.displayIcon, (newWidth, newHeight) => {
    const scaleFactor = desiredHeight / newHeight;
    setIconWidth(newWidth * scaleFactor);
    setIconHeight(newHeight * scaleFactor);
  });
  return (
    <TouchableOpacity style={styles.container} onPress={() => onClick(weapon)}>
      <Image
        source={{uri: weapon.displayIcon}}
        style={{width: iconWidth, height: iconHeight}}
      />
      <Text style={styles.displayName}>{weapon.displayName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  displayName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    color: 'gray',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WeaponItem;
