import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {MapRouteStackParamList} from '../Maps';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GroupedRegions {
  superRegionName: string;
  regionNames: string[];
}

export class MapDetail extends React.Component<{
  navigation: NativeStackNavigationProp<MapRouteStackParamList, 'MapDetail'>;
  route: RouteProp<MapRouteStackParamList, 'MapDetail'>;
}> {
  componentDidMount() {
    this.props.navigation.setOptions({
      title: '',
      headerShown: true,
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTintColor: 'white',
      headerTransparent: true,
    });
  }
  render() {
    const {item} = this.props.route.params;
    const {displayName, splash, coordinates, displayIcon, callouts} = item;
    let calloutReduced: GroupedRegions[] = [];
    if (callouts !== null) {
      calloutReduced = callouts.reduce((acc, curr) => {
        let indexFound = acc.find(
          a => a.superRegionName === curr.superRegionName,
        );
        if (indexFound !== undefined) {
          indexFound.regionNames.push(curr.regionName);
          return acc;
        }
        return [
          ...acc,
          {
            superRegionName: curr.superRegionName,
            regionNames: [curr.regionName],
          },
        ];
      }, [] as GroupedRegions[]);
    }
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri: splash}}>
          <LinearGradient
            colors={['rgba(0,0,0,0.2)', '#00000000', 'rgba(0,0,0,0.2)']}>
            <ScrollView>
              <View style={styles.mapContainer}>
                <LinearGradient
                  style={styles.titleContainer}
                  colors={[
                    '#00000000',
                    'rgba(0,0,0,0.3)',
                    'rgba(0,0,0,0.3)',
                    '#00000000',
                  ]}>
                  <Text style={styles.mapTitle}>{displayName}</Text>
                  <Text style={styles.coordinate}>{coordinates}</Text>
                </LinearGradient>
              </View>
              <View style={styles.page}>
                <Text style={styles.title}>Informations</Text>
                <Text style={styles.subTitle}>Map Structure</Text>
                <Image style={styles.mapImage} source={{uri: displayIcon}} />
                <View>
                  <Text style={styles.subTitle}>Point of interest</Text>
                  {calloutReduced.map(gr => {
                    return (
                      <View style={styles.calloutContainer}>
                        <Text style={styles.superRegion}>
                          {gr.superRegionName}
                        </Text>
                        {gr.regionNames.map(rn => {
                          return <Text>{rn}</Text>;
                        })}
                      </View>
                    );
                  })}
                </View>
              </View>
            </ScrollView>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  page: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: ScreenHeight - 125,
  },
  mapTitle: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  coordinate: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  mapImage: {
    height: 400,
    width: '100%',
    marginBottom: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'gray',
  },
  subTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
  },
  superRegion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  displayIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  calloutContainer: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  calloutText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
