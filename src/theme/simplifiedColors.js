import { lightColors, darkColors } from './colors';

// Colores simplificados para tema claro - nombres explicativos
export const lightTheme = {
  // Fondos
  fondo: lightColors.background,              // #F8F9FF - Fondo principal de la app
  fondoTarjeta: lightColors.surfaceContainer, // #ECEDF4 - Fondo de tarjetas/cards
  fondoInput: lightColors.surface,            // #F8F9FF - Fondo de inputs
  fondoBoton: lightColors.primary,            // #39608F - Fondo de botones principales
  fondoBotonSecundario: lightColors.secondaryContainer, // #D8E3F8 - Fondo botones secundarios
  
  // Textos
  texto: lightColors.onBackground,            // #191C20 - Texto principal
  textoSecundario: lightColors.onSurfaceVariant, // #43474E - Texto secundario/subtítulos
  textoBoton: lightColors.onPrimary,          // #FFFFFF - Texto en botones principales
  textoBotonSecundario: lightColors.onSecondaryContainer, // #3C4758 - Texto botones secundarios
  placeholder: lightColors.onSurfaceVariant,  // #43474E - Texto de placeholder
  
  // Bordes y líneas
  borde: lightColors.outline,                 // #73777F - Bordes normales
  bordeClaro: lightColors.outlineVariant,     // #C3C6CF - Bordes suaves
  bordeFocused: lightColors.primary,          // #39608F - Borde cuando está enfocado
  
  // Estados y acciones
  primario: lightColors.primary,              // #39608F - Color principal de la app
  secundario: lightColors.secondary,          // #545F70 - Color secundario
  exitoso: '#4CAF50',                         // Verde para éxito
  advertencia: '#FF9800',                     // Naranja para advertencias
  error: lightColors.error,                   // #BA1A1A - Rojo para errores
  textoError: lightColors.error,              // #BA1A1A - Texto de error
  
  // Efectos
  sombra: lightColors.shadow,                 // #000000 - Color de sombras
  overlay: 'rgba(0, 0, 0, 0.5)',            // Overlay/modal backdrop
  
  // Navegación
  tabActivo: lightColors.primary,             // #39608F - Tab activo
  tabInactivo: lightColors.onSurfaceVariant,  // #43474E - Tab inactivo
  header: lightColors.surface,                // #F8F9FF - Fondo del header
};

// Colores simplificados para tema oscuro - nombres explicativos
export const darkTheme = {
  // Fondos
  fondo: darkColors.background,               // #111418 - Fondo principal de la app
  fondoTarjeta: darkColors.surfaceContainer,  // #1D2024 - Fondo de tarjetas/cards
  fondoInput: darkColors.surface,             // #111418 - Fondo de inputs
  fondoBoton: darkColors.primary,             // #A3C9FE - Fondo de botones principales
  fondoBotonSecundario: darkColors.secondaryContainer, // #3C4758 - Fondo botones secundarios
  
  // Textos
  texto: darkColors.onBackground,             // #E1E2E8 - Texto principal
  textoSecundario: darkColors.onSurfaceVariant, // #C3C6CF - Texto secundario/subtítulos
  textoBoton: darkColors.onPrimary,           // #00315C - Texto en botones principales
  textoBotonSecundario: darkColors.onSecondaryContainer, // #D8E3F8 - Texto botones secundarios
  placeholder: darkColors.onSurfaceVariant,   // #C3C6CF - Texto de placeholder
  
  // Bordes y líneas
  borde: darkColors.outline,                  // #8D9199 - Bordes normales
  bordeClaro: darkColors.outlineVariant,      // #43474E - Bordes suaves
  bordeFocused: darkColors.primary,           // #A3C9FE - Borde cuando está enfocado
  
  // Estados y acciones
  primario: darkColors.primary,               // #A3C9FE - Color principal de la app
  secundario: darkColors.secondary,           // #BCC7DB - Color secundario
  exitoso: '#81C784',                         // Verde claro para éxito
  advertencia: '#FFB74D',                     // Naranja claro para advertencias
  error: darkColors.error,                    // #FFB4AB - Rojo claro para errores
  textoError: darkColors.error,               // #FFB4AB - Texto de error
  
  // Efectos
  sombra: darkColors.shadow,                  // #000000 - Color de sombras
  overlay: 'rgba(0, 0, 0, 0.7)',            // Overlay/modal backdrop más oscuro
  
  // Navegación
  tabActivo: darkColors.primary,              // #A3C9FE - Tab activo
  tabInactivo: darkColors.onSurfaceVariant,   // #C3C6CF - Tab inactivo
  header: darkColors.surface,                 // #111418 - Fondo del header
};

// Función para obtener el tema actual
export const getTheme = (isDark) => isDark ? darkTheme : lightTheme;

export default { lightTheme, darkTheme, getTheme };