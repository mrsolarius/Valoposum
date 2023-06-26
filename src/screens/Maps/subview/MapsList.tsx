import React from 'react';
import {MapData} from '../../../services/models/valorant-maps';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {getMaps} from '../../../services/valorant.service';
import {MapItem} from '../../../components/Maps/MapItem';
import {MapRouteStackParamList} from '../Maps';
import Snackbar from 'react-native-snackbar';

export interface MapsState {
  maps: MapData[];
  loading: boolean;
}
export class MapsList extends React.Component<
  {navigation: NativeStackNavigationProp<MapRouteStackParamList, 'MapsList'>},
  MapsState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      maps: [] as MapData[],
      loading: true,
    };

    this.props.navigation.setOptions({title: 'Les Maps'});
  }
  async componentDidMount() {
    try {
      const maps = (await getMaps()).sort((a, b) =>
        a.displayName.localeCompare(b.displayName),
      );
      this.setState({maps, loading: false});
    } catch (error) {
      console.error(error);
    }
  }

  onItemPress = (item: MapData) => {
    if (item.displayName !== 'The Range') {
      this.props.navigation.navigate('MapDetail', {item});
    } else {
      Snackbar.show({
        text: 'The Range is not a playable map',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };
  render() {
    const {maps, loading} = this.state;
    const renderItem = ({item}: {item: MapData}) => (
      <MapItem item={item} onPress={this.onItemPress} />
    );
    return loading ? (
      <ActivityIndicator />
    ) : (
      <FlatList
        data={maps}
        renderItem={renderItem}
        keyExtractor={item => item.uuid}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
});
