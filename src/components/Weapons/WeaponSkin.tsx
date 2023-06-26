import {Skins} from '../../services/models/volorant-weapon';
import {Image, StyleSheet, Text, View} from 'react-native';

export interface WeaponSkinProps {
  item: Skins;
}
export function WeaponSkin(props: WeaponSkinProps) {
  const {item} = props;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.displayIcon}}
        style={{width: 300, height: 100}}
        resizeMode={'contain'}
      />
      <Text style={styles.displayName}>{item.displayName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
