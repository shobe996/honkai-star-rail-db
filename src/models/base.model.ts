/**
 * The base model interface that all other models extend.
 * Includes a unique numerical identifier and allows for additional dynamic properties.
 */
export interface Base {
    
    /** The unique numerical identifier for the model. */
    readonly id: number;
  
    /** The official localized name of the character (e.g., 'March 7th'). */
    readonly name: string;
  
    [key: string]: unknown;
  }
  