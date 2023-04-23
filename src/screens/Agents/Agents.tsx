import React from 'react';
import {StyleSheet} from 'react-native';
import {Agent} from '../../services/models/valorant-agents';
import AgentDetail from './subview/AgentDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AgentsList from './subview/AgentsList';

export type RouteStackParamList = {
  AgentsList: undefined;
  AgentDetail: {item: Agent};
};

const Stack = createNativeStackNavigator<RouteStackParamList>();
export class Agents extends React.Component<{}> {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name={'AgentsList'} component={AgentsList} />
          <Stack.Screen name={'AgentDetail'} component={AgentDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
});
