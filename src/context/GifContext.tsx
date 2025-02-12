import { createContext, useReducer, ReactNode, useContext } from 'react';
import { GifContextState, GifContextAction  } from '../types/context';
import { Gif } from "../types/gif";

const loadSavedGifs = (): Gif[] => {
  try {
    const saved = JSON.parse(localStorage.getItem('savedGifs') || '[]');
    return Array.isArray(saved) ? saved as Gif[] : [];
  } catch {
    return [];
  }
};

const initialState: GifContextState = {
  savedGifs: loadSavedGifs(),
};

// Reducer function - reducer updates localStorage, so the persistence storage is working. GifProvider also correctly initializes from localStorage
const gifReducer = (state: GifContextState, action: GifContextAction): GifContextState => {
  switch (action.type) {
    case 'SAVE_GIF':
      const updatedSave = [...state.savedGifs, action.payload];
      localStorage.setItem('savedGifs', JSON.stringify(updatedSave));
      return { savedGifs: updatedSave };
    case 'REMOVE_GIF':
      const updatedRemove = state.savedGifs.filter(gif => gif.id !== action.payload);
      localStorage.setItem('savedGifs', JSON.stringify(updatedRemove));
      return { savedGifs: updatedRemove };
    default:
      return state;
  }
};

// create context
export const GifContext = createContext<{
  state: GifContextState;
  dispatch: React.Dispatch<GifContextAction>;
}>({ state: initialState, dispatch: () => {} });

// provider component - ensures that on refresh, savedGifs are loaded properly
export const GifProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gifReducer, initialState);
  return <GifContext.Provider value={{ state, dispatch }}>{children}</GifContext.Provider>;
};

// custom hook to access GifContext
export const useGifContext = () => {
  const context = useContext(GifContext);
  if (!context) throw new Error("useGifContext must be used within a GifProvider");
  return context;
};


