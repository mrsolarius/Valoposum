import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Agent} from '../../services/models/valorant-agents';

const AgentDetail = ({agent}: {agent: Agent}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: agent.fullPortrait}} style={styles.image} />
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
              <View style={styles.abilityDetails}>
                <Text style={styles.abilityName}>{ability.displayName}</Text>
                <Text style={styles.abilityDescription}>
                  {ability.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  image: {
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
    flex: 1,
  },
  abilityName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  abilityDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

export default AgentDetail;
