import {Agent} from './models/valorant-agents';

export async function getAgents(): Promise<Agent[]> {
  return fetch('https://valorant-api.com/v1/agents').then(res => res.json());
}
