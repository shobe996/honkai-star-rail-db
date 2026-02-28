import { characters } from '../data';
import { factions } from '../data/factions';
import { paths } from '../data/paths';
import { rarities } from '../data/rarities';
import { types } from '../data/types';

export type FactionName = keyof typeof factions;
export interface Faction {
  readonly id: number;
  readonly name: string;
}

export type PathName = keyof typeof paths;
export interface Path {
  readonly id: number;
  readonly name: string;
  readonly icon_url: string;
}

export type RarityName = keyof typeof rarities;
export interface Rarity {
  readonly id: number;
  readonly name: string;
  readonly value: number;
  readonly icon: string;
}

export type TypeName = keyof typeof types;
export interface Type {
  readonly id: number;
  readonly name: string;
  readonly icon_url: string;
}

export type CharacterName = keyof typeof characters;
export interface CharacterStats {
  readonly base_hp: number;
  readonly base_atk: number;
  readonly base_def: number;
  readonly base_speed: number;
}

export interface Character {
  readonly id: number;
  readonly name: string;
  readonly icon_url: string;
  readonly desc: string;
  readonly path: Path;
  readonly faction: Faction;
  readonly rarity: Rarity;
  readonly type: Type;
  readonly stats: {
    readonly level1: CharacterStats;
    readonly level80: CharacterStats;
  };
}
