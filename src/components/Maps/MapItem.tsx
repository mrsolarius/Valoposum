import {MapData} from '../../services/models/valorant-maps';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export function MapItem({item, onPress}: {item: MapData; onPress: any}) {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <ImageBackground source={{uri: item.splash}}>
        <LinearGradient
          colors={['rgba(0,0,0,0.2)', '#00000000', 'rgba(0,0,0,0.2)']}
          style={styles.item}>
          <View style={styles.item}>
            <Text style={styles.title}>{item.displayName.toUpperCase()}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    height: 200,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
