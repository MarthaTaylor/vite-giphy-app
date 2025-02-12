import { Gif } from './gif';

export interface GifContextState {
  savedGifs: Gif[];
}

export type GifContextAction =
  | { type: 'SAVE_GIF'; payload: Gif }
  | { type: 'REMOVE_GIF'; payload: string };
