import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import type { ThemeContextType } from '../components/ThemeContext';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
