/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {Maps} from './screens/Maps';
import {Weapons} from './screens/Weapons';
import {Agents} from './screens/Agents';
import {Skins} from './screens/Skins';

const Tab = createBottomTabNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              //https://blog.logrocket.com/react-native-vector-icons-fonts-react-native-app-ui/
              let iconName = '';

              switch (route.name) {
                case 'Agents':
                  iconName = focused ? 'map' : 'map-outline';
                  break;
                case 'Maps':
                  iconName = focused ? 'map' : 'map-outline';
                  break;
                case 'Weapons':
                  iconName = focused ? 'map' : 'map-outline';
                  break;
                case 'Skins':
                  iconName = focused ? 'map' : 'map-outline';
                  break;
              }

              // You can return any component that you like here!
              return (
                <Icon name={iconName} size={30} type="ionicon" color="#900" />
              );
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Agents" component={Agents} />
          <Tab.Screen name="Maps" component={Maps} />
          <Tab.Screen name="Weapons" component={Weapons} />
          <Tab.Screen name="Skins" component={Skins} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default App;
