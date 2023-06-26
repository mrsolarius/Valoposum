import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {WeaponsRouteStackParamList} from '../Weapons';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {Weapon} from '../../../services/models/volorant-weapon';
import {getWeapons} from '../../../services/valorant.service';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import WeaponItem from '../../../components/Weapons/WeaponItem';

export interface WeaponState {
  weapon: Weapon[];
  loading: boolean;
}

export interface CategorysedWeapon {
  categoryId: string;
  category: string;
  weapons: Weapon[];
}
export class WeaponsList extends React.Component<
  {
    navigation: NativeStackNavigationProp<
      WeaponsRouteStackParamList,
      'WeaponsList'
    >;
    route: RouteProp<WeaponsRouteStackParamList, 'WeaponsList'>;
  },
  WeaponState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      weapon: [] as Weapon[],
      loading: true,
    };

    this.props.navigation.setOptions({title: 'Weapons'});
  }

  onItemPress = (item: Weapon) => {
    this.props.navigation.navigate('WeaponDetail', {item});
  };

  async componentDidMount() {
    try {
      const weapon = await getWeapons();
      this.setState({weapon, loading: false});
    } catch (error) {
      console.error(error);
    }
  }
  renderCategory(category: string, weapons: Weapon[]) {
    const renderItem = ({item}: {item: Weapon}) => (
      <WeaponItem weapon={item} onClick={this.onItemPress} />
    );

    return (
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{category}</Text>
        <FlatList
          data={weapons}
          renderItem={renderItem}
          keyExtractor={item => item.uuid}
          horizontal
        />
      </View>
    );
  }

  render() {
    const {weapon, loading} = this.state;
    const categories = this.groupWeapons(weapon);

    return loading ? (
      <ActivityIndicator />
    ) : (
      <FlatList
        data={categories}
        renderItem={({item}) =>
          this.renderCategory(item.category, item.weapons)
        }
        keyExtractor={item => item.category}
        contentContainerStyle={styles.container}
      />
    );
  }

  private groupWeapons(weapons: Weapon[]) {
    const categories = weapons.reduce((acc: CategorysedWeapon[], weapon) => {
      const category = acc.find(cat => cat.categoryId === weapon.category);
      if (category) {
        category.weapons.push(weapon);
      } else {
        acc.push({
          categoryId: weapon.category,
          category: weapon.category.split('::')[1],
          weapons: [weapon],
        });
      }
      return acc;
    }, [] as CategorysedWeapon[]);
    return categories.map(category => {
      category.weapons.sort((a, b) =>
        a.shopData?.cost && b.shopData?.cost
          ? a.shopData.cost - b.shopData.cost
          : a.shopData?.cost
          ? 1
          : -1,
      );
      return category;
    });
  }
}

const styles = StyleSheet.create({
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  categoryContainer: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
});
