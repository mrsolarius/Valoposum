import React from 'react';
import {Agent} from '../../services/models/valorant-agents';
import AgentDetail from './subview/AgentDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AgentsList from './subview/AgentsList';

export type AgentRouteStackParamList = {
  AgentsList: undefined;
  AgentDetail: {item: Agent};
};

const Stack = createNativeStackNavigator<AgentRouteStackParamList>();
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
