import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {Agent} from '../../../services/models/valorant-agents';
import AgentItem from '../../../components/Agents/AgentItem';
import {getAgents} from '../../../services/valorant.service';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AgentRouteStackParamList} from '../Agents';

export interface AgentsState {
  agents: Agent[];
  loading: boolean;
}
class AgentsList extends React.Component<
  {
    navigation: NativeStackNavigationProp<
      AgentRouteStackParamList,
      'AgentsList'
    >;
  },
  AgentsState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      agents: [] as Agent[],
      loading: true,
    };

    this.props.navigation.setOptions({title: 'Les Agents'});
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
    this.props.navigation.navigate('AgentDetail', {item});
  };
  render() {
    let {agents, loading} = this.state;
    const renderItem = ({item}: {item: Agent}) => (
      <AgentItem item={item} onPress={this.onItemPress} />
    );
    return loading ? (
      <ActivityIndicator />
    ) : (
      <FlatList
        data={agents}
        renderItem={renderItem}
        keyExtractor={item => item.uuid}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    width: '100%',
  },
});

export default AgentsList;
