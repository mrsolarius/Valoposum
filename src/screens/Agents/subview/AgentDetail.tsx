import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AgentRouteStackParamList} from '../Agents';
import LinearGradient from 'react-native-linear-gradient';

class AgentDetail extends React.Component<{
  navigation: NativeStackNavigationProp<
    AgentRouteStackParamList,
    'AgentDetail'
  >;
  route: RouteProp<AgentRouteStackParamList, 'AgentDetail'>;
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
    const agent = this.props.route.params.item;
    return (
      <LinearGradient
        colors={agent.backgroundGradientColors.map(v => '#' + v)}
        style={styles.baseContainer}>
        <ImageBackground
          source={{uri: agent.background}}
          imageStyle={{opacity: 0.3}}
          style={styles.baseContainer}>
          <ScrollView contentContainerStyle={styles.container}>
            <Image source={{uri: agent.fullPortraitV2}} style={styles.image} />
            <View style={styles.page}>
              <View style={styles.header}>
                <Image
                  source={{uri: agent.displayIcon}}
                  style={styles.imageProfile}
                />
                <View style={styles.details}>
                  <Text style={styles.name}>{agent.displayName}</Text>
                  <Text style={styles.role}>{agent.role.displayName}</Text>
                  <View style={styles.abilities}>
                    {agent.abilities.map(ability => (
                      <View key={ability.slot} style={styles.ability}>
                        <Image
                          source={{uri: ability.displayIcon}}
                          style={styles.abilityIcon}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.description}>{agent.description}</Text>
                <View style={styles.abilityContainer}>
                  {agent.abilities.map((ability, index) => (
                    <View style={styles.abilityDetails}>
                      <Image
                        source={{uri: ability.displayIcon}}
                        style={styles.abilityBigIcon}
                        tintColor={
                          agent.backgroundGradientColors.map(v => '#' + v)[
                            index % agent.backgroundGradientColors.length
                          ]
                        }
                      />
                      <View>
                        <Text style={styles.abilityName}>
                          {ability.displayName}
                        </Text>
                        <Text style={styles.abilityDescription}>
                          {ability.description}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  page: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  header: {
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
    flexGrow: 0,
  },
  image: {
    height: 600,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  imageProfile: {
    width: 120,
    height: 120,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  role: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 16,
  },
  abilities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 0,
  },
  ability: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginRight: 16,
  },
  abilityIcon: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  abilityDetails: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  abilityName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  abilityDescription: {
    fontSize: 14,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    color: 'gray',
    padding: 16,
  },
  abilityBigIcon: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  abilityContainer: {
    flexDirection: 'column',
    margin: 16,
  },
});

export default AgentDetail;
