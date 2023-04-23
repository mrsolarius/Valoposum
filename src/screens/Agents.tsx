import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Agent} from '../services/models/valorant-agents';
import {getAgents} from '../services/valorant.service';
import AgentsList from '../components/Agents/AgentsList';
import AgentDetail from '../components/Agents/AgentDetail';

export interface AgentsState {
  agents: Agent[];
  loading: boolean;
  showDetails: boolean;
  selectedAgent: Agent;
}

export class Agents extends React.Component<{}, AgentsState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      agents: [] as Agent[],
      showDetails: false,
      selectedAgent: {} as Agent,
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

  onItemPress = (item: Agent) => {
    this.setState({showDetails: true, selectedAgent: item});
  };

  render() {
    const {agents, loading, selectedAgent, showDetails} = this.state;
    if (loading) {
      return (
        <View style={styles.viewContainer}>
          <ActivityIndicator />
        </View>
      );
    } else if (showDetails) {
      return (
        <View style={styles.viewContainer}>
          <AgentDetail agent={selectedAgent} />
        </View>
      );
    } else {
      return (
        <View style={styles.viewContainer}>
          <AgentsList agents={agents} onItemPress={this.onItemPress} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
});
