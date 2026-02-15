import { factions } from '../data/factions';
import { paths } from '../data/paths';
import { rarities } from '../data/rarities';
import { types } from '../data/types';

export type FactionName = keyof typeof factions;
export type Faction = (typeof factions)[FactionName];

export type PathName = keyof typeof paths;
export type Path = (typeof paths)[PathName];

export type RarityName = keyof typeof rarities;
export type Rarity = (typeof rarities)[RarityName];

export type TypeName = keyof typeof types;
export type Type = (typeof types)[TypeName];
