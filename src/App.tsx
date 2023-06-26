/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Maps} from './screens/Maps/Maps';
import {Weapons} from './screens/Weapons/Weapons';
import {Agents} from './screens/Agents/Agents';

const Tab = createBottomTabNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              let iconName = '';

              switch (route.name) {
                case 'Agents':
                  iconName = 'people';
                  break;
                case 'Maps':
                  iconName = 'map';
                  break;
                case 'Weapons':
                  iconName = 'skull';
                  break;
              }
              focused ? (iconName += '') : (iconName += '-outline');
              return <Ionicons name={iconName} size={30} color="#900" />;
            },
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Agents" component={Agents} />
          <Tab.Screen name="Maps" component={Maps} />
          <Tab.Screen name="Weapons" component={Weapons} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
