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
import {Maps} from './screens/Maps';
import {Weapons} from './screens/Weapons';
import {Agents} from './screens/Agents/Agents';
import {Skins} from './screens/Skins';

const Tab = createBottomTabNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              //https://blog.logrocket.com/react-native-vector-icons-fonts-react-native-app-ui/
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
                case 'Skins':
                  iconName = 'shirt';
                  break;
              }
              focused ? (iconName += '') : (iconName += '-outline');
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={30} color="#900" />;
            },
            headerShown: false,
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

export default App;
