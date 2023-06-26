import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {WeaponsRouteStackParamList} from '../Weapons';
import {RouteProp} from '@react-navigation/native';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {WeaponSkin} from '../../../components/Weapons/WeaponSkin';

export class WeaponDetail extends React.Component<{
  navigation: NativeStackNavigationProp<
    WeaponsRouteStackParamList,
    'WeaponDetail'
  >;
  route: RouteProp<WeaponsRouteStackParamList, 'WeaponDetail'>;
}> {
  render() {
    const {item} = this.props.route.params;
    const {displayName, category, displayIcon, weaponStats, skins, shopData} =
      item;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.weaponHeader}>
            <Text style={styles.displayName}>{displayName}</Text>
            <Text style={styles.category}>{category.split('::')[1]}</Text>
            <Image
              source={{uri: displayIcon}}
              style={styles.weaponImg}
              resizeMode="contain"
            />
            {shopData && <Text style={styles.category}>{shopData?.cost}$</Text>}
          </View>
          <View style={styles.weaponInfoContainer}>
            {weaponStats && (
              <>
                <Text style={styles.title}>Weapon Stats</Text>
                <View style={styles.statContainer}>
                  <View>
                    <Text
                      style={
                        styles.stat
                      }>{`Fire Rate: ${weaponStats.fireRate}`}</Text>
                    <Text
                      style={
                        styles.stat
                      }>{`Magazine Size: ${weaponStats.magazineSize}`}</Text>
                    <Text
                      style={
                        styles.stat
                      }>{`Run Speed Multiplier: ${weaponStats.runSpeedMultiplier}`}</Text>
                  </View>
                  <View>
                    <Text
                      style={
                        styles.stat
                      }>{`Equip Time: ${weaponStats.equipTimeSeconds} seconds`}</Text>
                    <Text
                      style={
                        styles.stat
                      }>{`Reload Time: ${weaponStats.reloadTimeSeconds} seconds`}</Text>
                    <Text
                      style={
                        styles.stat
                      }>{`First Bullet Accuracy: ${weaponStats.firstBulletAccuracy}`}</Text>
                  </View>
                </View>
              </>
            )}
            {skins && (
              <>
                <Text style={styles.title}>Skins</Text>
                <View style={styles.skinsContainer}>
                  <FlatList
                    data={skins}
                    renderItem={WeaponSkin}
                    horizontal={true}
                  />
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.item.displayName,
    });
  }
}
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  weaponHeader: {
    width: ScreenWidth,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: ScreenHeight - 200,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#c7c3c3',
  },
  weaponImg: {
    width: ScreenWidth - 40,
    height: 140,
    marginBottom: 10,
  },
  icon: {
    flex: 1,
    marginBottom: 5,
    width: 100,
    height: 100,
  },
  displayName: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 2,
    color: 'black',
  },
  category: {
    fontSize: 20,
    marginBottom: 10,
    color: 'gray',
  },
  weaponInfoContainer: {
    flex: 1,
    margin: 16,
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'gray',
  },
  stat: {
    fontSize: 14,
    marginBottom: 5,
    color: 'black',
  },
  statContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  statBlock: {
    flex: 1,
    flexDirection: 'column',
  },
  shopContainer: {
    marginVertical: 10,
  },
  shopHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  shopText: {
    fontSize: 12,
    marginBottom: 2,
  },
  skinsHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  skinsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skinIcon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  skinContainer: {
    alignItems: 'center',
    margin: 5,
  },
  skinName: {
    fontSize: 12,
  },
});
