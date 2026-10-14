/**
 * The base numerical attributes.
 * This structure is used for snapshots at specific level milestones (Level 1 and Level 80).
 */
export interface Stats {
  /** The base Health Points of the character.
   * This value serves as the foundation for HP% bonuses from Relics and Light Cones.
   */
  readonly base_hp: number;

  /** The base Attack power of the character.
   * Used to calculate the final damage output for most skills and Damage over Time (DoT) effects.
   */
  readonly base_atk: number;

  /** The base Defense value of the character.
   * Determines the character's damage mitigation and serves as a scaling factor for many Preservation skills.
   */
  readonly base_def: number;
}
