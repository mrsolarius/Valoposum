import React from 'react';
import {Weapon} from '../../services/models/volorant-weapon';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {WeaponDetail} from './subview/WeaponDetail';
import {WeaponsList} from './subview/WeaponsList';

export type WeaponsRouteStackParamList = {
  WeaponsList: undefined;
  WeaponDetail: {item: Weapon};
};

const Stack = createNativeStackNavigator<WeaponsRouteStackParamList>();
export class Weapons extends React.Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name={'WeaponsList'} component={WeaponsList} />
          <Stack.Screen name={'WeaponDetail'} component={WeaponDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
