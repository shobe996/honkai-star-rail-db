import { rarities } from "../data/rarities";

export type RarityName = keyof typeof rarities;

export type Rarity = (typeof rarities)[RarityName];