/**
 * Represents the criteria used to filter planar ornaments across multiple attributes.
 * Fields provided will be treated as part of an OR operation.
 */
export interface PlanarOrnamentSearchCriteria {
    /** The name of the planar ornament to filter by. */
    name?: string;
    
    /** The effect of the planar ornament to filter by. */
    effect?: string;
}
