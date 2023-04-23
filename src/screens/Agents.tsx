import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Agent} from '../services/models/valorant-agents';
import {getAgents} from '../services/valorant.service';
import AgentsList from '../components/Agents/AgentsList';
export interface AgentsState {
  agents: Agent[];
  loading: boolean;
}
export class Agents extends React.Component<{}, AgentsState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      agents: [] as Agent[],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const agents = await getAgents();
      this.setState({agents, loading: false});
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const {agents, loading} = this.state;
    return (
      <View style={styles.viewContainer}>
        {loading ? <ActivityIndicator /> : <AgentsList agents={agents} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
});
