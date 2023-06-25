import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Agent} from '../../services/models/valorant-agents';

function AgentItem(props: {item: Agent; onPress: (item: Agent) => void}) {
  let {item, onPress} = props;
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.item}>
        <Image source={{uri: item.displayIcon}} style={styles.icon} />
        <View style={styles.details}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#' + item.backgroundGradientColors[1],
            }}>
            {item.displayName}
          </Text>
          <Text style={styles.role}>{item.role.displayName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  details: {
    flex: 1,
  },
  role: {
    fontSize: 14,
    color: 'gray',
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 16,
    borderRadius: 24,
  },
});
export default AgentItem;
