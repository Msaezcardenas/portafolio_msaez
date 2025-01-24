import { createContext } from 'react';

export type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
