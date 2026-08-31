import { PlanarOrnamentImages } from './planar-ornament-image.types';

export interface PlanarOrnament {
    id: number;
    name: string;
    set: '2-Piece-Set';
    two_set_effect: string;
    icons: PlanarOrnamentImages;
  }