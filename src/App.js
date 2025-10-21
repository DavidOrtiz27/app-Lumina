import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import AppNavigator from './navigation/AppNavigator';
import { ThemeProvider, useTheme } from './theme/ThemeContext';

// Componente interno que usa el tema
function AppContent() {
  const { isDarkMode } = useTheme();
  
  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
