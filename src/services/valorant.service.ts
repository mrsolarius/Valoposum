import {Agent} from './models/valorant-agents';

export async function getAgents(): Promise<Agent[]> {
  try {
    const response = await fetch(
      'https://valorant-api.com/v1/agents?isPlayableCharacter=true',
    );
    const data = await response.json();
    return data.data as Agent[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
