# 📱 Lumina - Estructura del Proyecto y Flujo de Trabajo

## 🏗️ Estructura Completa del Proyecto

```
Lumina/
├── 📁 src/                          # Código fuente principal
│   ├── 📁 api/                      # Configuración y servicios de API
│   │   ├── 📄 apiConfig.js          # URL base y configuración de API
│   │   └── 📄 services.js           # Funciones para consumir endpoints
│   │
│   ├── 📁 components/               # Componentes reutilizables de UI
│   │   └── (vacío - aquí irán tus componentes)
│   │
│   ├── 📁 navigation/               # Configuración de navegación
│   │   ├── 📄 AppNavigator.js       # Stack Navigator principal
│   │   └── 📄 DrawerNavigator.js    # Drawer (menú lateral)
│   │
│   ├── 📁 screens/                  # Pantallas de la aplicación
│   │   ├── 📄 Login.js              # Pantalla de autenticación
│   │   └── 📄 Home.js               # Pantalla principal
│   │
│   ├── 📁 styles/                   # Estilos centralizados
│   │   └── 📄 globalStyles.js       # Estilos globales y comunes
│   │
│   ├── 📁 theme/                    # Manejo de temas y colores
│   │   ├── 📄 colors.js             # Paleta de colores (light/dark)
│   │   └── 📄 theme.js              # Configuración de temas
│   │
│   ├── 📁 utils/                    # Funciones auxiliares
│   │   └── 📄 storage.js            # Helpers para AsyncStorage
│   │
│   └── 📄 App.js                    # Componente raíz de la aplicación
│
├── 📄 App.js                        # Entry point (importa src/App.js)
├── 📄 babel.config.js               # Configuración de Babel
├── 📄 package.json                  # Dependencias y scripts
├── 📄 app.json                      # Configuración de Expo
└── 📄 ESTRUCTURA-Y-FLUJO.md         # Este archivo
```

---

## 📋 Descripción Detallada de Archivos

### 🔧 **Archivos de Configuración**

#### `App.js` (raíz)
```javascript
// Entry point principal - solo importa src/App.js
import App from './src/App';
export default App;
```
**Propósito**: Punto de entrada que Expo busca automáticamente.

#### `babel.config.js`
```javascript
// Configuración de Babel con plugin de Reanimated
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin']
  };
};
```
**Propósito**: Habilita react-native-reanimated y configuraciones de Expo.

---

### 🚀 **src/App.js** - Componente Principal
```javascript
// Inicializa gesture handler, navigation container y StatusBar
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
```
**Funciones**:
- Inicializa gesture handler para navegación
- Envuelve la app en NavigationContainer
- Configura StatusBar automática
- Monta el AppNavigator principal

---

## 🧭 **Navegación (src/navigation/)**

### `AppNavigator.js` - Stack Navigator Principal
```javascript
// Stack Navigator: Login → HomeDrawer
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
```
**Funciones**:
- Controla flujo Login → Home
- Sin headers por defecto
- Pantalla inicial: Login

### `DrawerNavigator.js` - Menú Lateral
```javascript
// Drawer Navigator para pantallas principales
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
```
**Funciones**:
- Menú lateral deslizable
- Pantalla inicial: Home
- Aquí agregás más pantallas del menú

---

## 📱 **Pantallas (src/screens/)**

### `Login.js` - Pantalla de Autenticación
```javascript
// Pantalla de login básica
import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function Login() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
    </View>
  );
}
```
**Para implementar**:
- Formulario de login (email/password)
- Validaciones
- Navegación a Home después del login
- Manejo de errores

### `Home.js` - Pantalla Principal
```javascript
// Pantalla principal con drawer
import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home</Text>
    </View>
  );
}
```
**Para implementar**:
- Dashboard principal
- Contenido de la app
- Acceso al drawer menu

---

## 🎨 **Temas y Estilos**

### `src/theme/colors.js` - Paleta de Colores
```javascript
// Colores para tema claro y oscuro
export const lightColors = {
  background: '#FFFFFF',
  text: '#111827',
  primary: '#2563EB',
  card: '#F9FAFB',
};

export const darkColors = {
  background: '#0B1220',
  text: '#E6EEF8',
  primary: '#60A5FA',
  card: '#0F1724',
};
```
**Uso**: Definir colores consistentes para ambos temas.

### `src/theme/theme.js` - Configuración de Temas
```javascript
// Estructura de temas
import { lightColors, darkColors } from './colors';

const theme = {
  light: { colors: lightColors },
  dark: { colors: darkColors },
};

export default theme;
```
**Para implementar**:
- Context para cambio de tema
- Hook useTheme()
- Persistencia de preferencia

### `src/styles/globalStyles.js` - Estilos Globales
```javascript
// Estilos comunes reutilizables
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default globalStyles;
```
**Uso**: Estilos base para toda la app.

---

## 🌐 **API y Servicios**

### `src/api/apiConfig.js` - Configuración Base
```javascript
// URL base de la API
export const API_BASE_URL = 'https://api.example.com';

// Configuraciones adicionales aquí
```
**Para implementar**:
- Configuración de axios/fetch
- Headers por defecto
- Timeout y retry logic

### `src/api/services.js` - Servicios de API
```javascript
// Funciones para consumir endpoints
import { API_BASE_URL } from './apiConfig';

// export async function fetchItems() {
//   const res = await fetch(`${API_BASE_URL}/items`);
//   return res.json();
// }

export default {};
```
**Para implementar**:
- Funciones de autenticación
- CRUD operations
- Manejo de errores
- Cache de respuestas

---

## 💾 **Utilidades**

### `src/utils/storage.js` - AsyncStorage Helpers
```javascript
// Helpers para almacenamiento local
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveData(key, value) {
  // await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function getData(key) {
  // const json = await AsyncStorage.getItem(key);
  // return json != null ? JSON.parse(json) : null;
}

export async function removeData(key) {
  // await AsyncStorage.removeItem(key);
}
```
**Para implementar**:
- Guardar token de autenticación
- Preferencias de usuario
- Cache de datos
- Configuraciones de app

---

## 🔄 **Flujo de Trabajo Recomendado**

### 📋 **1. Desarrollo de Pantallas**
1. **Crear nueva pantalla**: `src/screens/NuevaPantalla.js`
2. **Agregar al navigator**: Editar `DrawerNavigator.js` o `AppNavigator.js`
3. **Crear estilos**: Usar `globalStyles` o crear archivo específico
4. **Testear navegación**: Verificar transiciones

### 📋 **2. Componentes Reutilizables**
1. **Crear en**: `src/components/MiComponente.js`
2. **Usar globalStyles**: Para consistencia visual
3. **Props tipados**: Definir PropTypes o TypeScript
4. **Documentar**: Comentar uso y props

### 📋 **3. Integración de API**
1. **Definir endpoint**: En `apiConfig.js`
2. **Crear servicio**: Función en `services.js`
3. **Manejar loading**: Estados de carga en pantallas
4. **Error handling**: Mostrar errores al usuario

### 📋 **4. Gestión de Estado**
1. **Local**: useState en componentes
2. **Global**: Context API o Redux
3. **Persistente**: AsyncStorage helpers
4. **Cache**: Implementar según necesidad

### 📋 **5. Temas y Personalización**
1. **Actualizar colores**: En `colors.js`
2. **Crear context**: Para cambio dinámico
3. **Usar en pantallas**: Aplicar colores del tema
4. **Persistir preferencia**: Con AsyncStorage

---

## 🛠️ **Comandos de Desarrollo**

### 🚀 **Comandos Básicos**
```bash
# Iniciar desarrollo
npm start

# Limpiar cache y reiniciar
npm start -- --clear

# Ejecutar en plataformas específicas
npm run android
npm run ios
npm run web

# Linting
npm run lint
```

### 🔧 **Debugging**
```bash
# Debugger remoto
# En app: Press 'j' para abrir debugger

# Logs en tiempo real
# Metro bundler muestra logs automáticamente

# Inspeccionar elementos
# Press 'Shift+M' para más herramientas
```

---

## 📂 **Próximos Pasos Sugeridos**

### ✅ **Fase 1: Autenticación**
- [ ] Implementar formulario de login
- [ ] Validación de campos
- [ ] Integrar API de autenticación
- [ ] Guardar token en AsyncStorage
- [ ] Pantalla de registro

### ✅ **Fase 2: Navegación Avanzada**
- [ ] Más pantallas en Drawer
- [ ] Bottom Tab Navigator
- [ ] Modal screens
- [ ] Deep linking

### ✅ **Fase 3: UI/UX**
- [ ] Implementar cambio de tema
- [ ] Animaciones con Reanimated
- [ ] Componentes custom
- [ ] Loading screens

### ✅ **Fase 4: Funcionalidades**
- [ ] QR Code scanner/generator
- [ ] Push notifications
- [ ] Offline support
- [ ] File upload/download

---

## 🎯 **Consejos de Desarrollo**

### 💡 **Mejores Prácticas**
1. **Usar globalStyles**: Para consistencia visual
2. **Modularizar**: Separar lógica en hooks custom
3. **Manejar errores**: Always handle API errors gracefully
4. **Optimizar**: Use FlatList para listas largas
5. **Accesibilidad**: Agregar accessibilityLabel

### 🚨 **Errores Comunes a Evitar**
1. **No usar keys**: En listas (FlatList/map)
2. **Estado mutable**: No mutar arrays/objetos directamente
3. **Memory leaks**: Limpiar timers y listeners
4. **Navigation loops**: Cuidado con navigate() recursivos
5. **Platform differences**: Testear en iOS y Android

### 🔍 **Herramientas Recomendadas**
- **Flipper**: Para debugging avanzado
- **Reactotron**: Para inspeccionar estado
- **VS Code Extensions**: ES7+ snippets, React Native tools
- **Expo DevTools**: Integradas en Expo

---

## 📞 **Recursos y Documentación**

- [React Navigation Docs](https://reactnavigation.org/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [AsyncStorage Guide](https://react-native-async-storage.github.io/async-storage/)
- [Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/)

---

**¡Tu proyecto está listo para crecer! 🚀 Sigue este flujo de trabajo para mantener tu código organizado y escalable.**