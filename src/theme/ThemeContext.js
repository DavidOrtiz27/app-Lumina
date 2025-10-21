import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { getTheme } from './simplifiedColors';

// Crear el contexto
const ThemeContext = createContext();

// Hook personalizado para usar el tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de ThemeProvider');
  }
  return context;
};

// Provider del tema
export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');
  const [themeMode, setThemeMode] = useState('system'); // 'light', 'dark', 'system'

  // Cargar preferencia guardada al iniciar
  useEffect(() => {
    loadThemePreference();
  }, []);

  // Actualizar tema cuando cambia el sistema (solo si está en modo system)
  useEffect(() => {
    if (themeMode === 'system') {
      setIsDarkMode(systemColorScheme === 'dark');
    }
  }, [systemColorScheme, themeMode]);

  const loadThemePreference = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('themePreference');
      if (savedTheme) {
        const parsedTheme = JSON.parse(savedTheme);
        setThemeMode(parsedTheme.mode);
        if (parsedTheme.mode !== 'system') {
          setIsDarkMode(parsedTheme.mode === 'dark');
        }
      }
    } catch (error) {
      console.log('Error cargando preferencia de tema:', error);
    }
  };

  const saveThemePreference = async (mode, isDark) => {
    try {
      await AsyncStorage.setItem('themePreference', JSON.stringify({
        mode,
        isDark
      }));
    } catch (error) {
      console.log('Error guardando preferencia de tema:', error);
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    const newMode = newIsDark ? 'dark' : 'light';
    
    setIsDarkMode(newIsDark);
    setThemeMode(newMode);
    saveThemePreference(newMode, newIsDark);
  };

  const setThemeToSystem = () => {
    setThemeMode('system');
    setIsDarkMode(systemColorScheme === 'dark');
    saveThemePreference('system', systemColorScheme === 'dark');
  };

  const setThemeToLight = () => {
    setThemeMode('light');
    setIsDarkMode(false);
    saveThemePreference('light', false);
  };

  const setThemeToDark = () => {
    setThemeMode('dark');
    setIsDarkMode(true);
    saveThemePreference('dark', true);
  };

  // Obtener colores actuales basados en el tema con nombres explicativos
  const colors = getTheme(isDarkMode);

  const value = {
    // Estado del tema
    isDarkMode,
    themeMode,
    colors,
    systemColorScheme,
    
    // Funciones para cambiar tema
    toggleTheme,
    setThemeToSystem,
    setThemeToLight,
    setThemeToDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;