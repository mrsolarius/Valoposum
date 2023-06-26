import {Agent} from './models/valorant-agents';
import {MapData} from './models/valorant-maps';
import {WeaponApiResponse, Weapon} from './models/volorant-weapon';

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

export async function getMaps(): Promise<MapData[]> {
  try {
    const response = await fetch('https://valorant-api.com/v1/maps');
    const data = await response.json();
    return data.data as MapData[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getWeapons(): Promise<Weapon[]> {
  try {
    const response = await fetch('https://valorant-api.com/v1/weapons');
    const data = (await response.json()) as WeaponApiResponse;
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
