import { StyleSheet } from 'react-native';

// Función para crear estilos dinámicos con nombres explicativos
export const createThemedStyles = (colors) => StyleSheet.create({
  // Contenedores
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.fondo,
  },
  
  safeAreaProvider: {
    flex: 1,
    backgroundColor: colors.fondo,
  },

  safeArea: {
    flex: 1,
    backgroundColor: colors.fondo,
  },

  card: {
    backgroundColor: colors.fondoTarjeta,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: colors.sombra,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // Textos
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
    color: colors.texto,
  },

  text: {
    fontSize: 16,
    color: colors.texto,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.texto,
    marginBottom: 6,
  },

  caption: {
    fontSize: 14,
    color: colors.textoSecundario,
  },

  // Inputs
  inputContainer: {
    width: '100%',
    marginVertical: 8,
  },
  
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.texto,
    marginBottom: 4,
  },
  
  textInput: {
    borderWidth: 1,
    borderColor: colors.borde,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: colors.fondoInput,
    color: colors.texto,
  },
  
  textInputFocused: {
    borderColor: colors.bordeFocused,
    borderWidth: 2,
    shadowColor: colors.primario,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  
  textInputError: {
    borderColor: colors.error,
    borderWidth: 2,
  },
  
  inputError: {
    color: colors.textoError,
    fontSize: 14,
    marginTop: 4,
  },
  
  inputIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },

  // Botones
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },

  buttonPrimary: {
    backgroundColor: colors.fondoBoton,
  },

  buttonSecondary: {
    backgroundColor: colors.fondoBotonSecundario,
    borderWidth: 1,
    borderColor: colors.borde,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },

  buttonTextPrimary: {
    color: colors.textoBoton,
  },

  buttonTextSecondary: {
    color: colors.textoBotonSecundario,
  },

  // Navegación
  headerStyle: {
    backgroundColor: colors.surface,
  },

  headerTitleStyle: {
    color: colors.onSurface,
  },

  // Superficie y elevación
  surface: {
    backgroundColor: colors.surface,
  },

  surfaceVariant: {
    backgroundColor: colors.surfaceVariant,
  },

  // Divisores
  divider: {
    height: 1,
    backgroundColor: colors.outlineVariant,
    marginVertical: 8,
  },

  // Estados
  disabled: {
    opacity: 0.38,
  },

  // Layout
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  fullWidth: {
    width: '100%',
  },

  // Márgenes y padding
  margin: {
    margin: 16,
  },

  marginVertical: {
    marginVertical: 8,
  },

  marginHorizontal: {
    marginHorizontal: 16,
  },

  padding: {
    padding: 16,
  },

  paddingVertical: {
    paddingVertical: 8,
  },

  paddingHorizontal: {
    paddingHorizontal: 16,
  },
});

export default createThemedStyles;