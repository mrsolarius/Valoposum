import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MapData} from '../../services/models/valorant-maps';
import {MapsList} from './subview/MapsList';
import {MapDetail} from './subview/MapDetail';

export type MapRouteStackParamList = {
  MapsList: undefined;
  MapDetail: {item: MapData};
};

const Stack = createNativeStackNavigator<MapRouteStackParamList>();

export class Maps extends React.Component<{}, {}> {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name={'MapsList'} component={MapsList} />
          <Stack.Screen name={'MapDetail'} component={MapDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
