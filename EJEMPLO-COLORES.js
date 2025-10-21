// EJEMPLO DE CÓMO USAR LOS COLORES SIMPLIFICADOS

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

export default function EjemploColores() {
  const { colors, isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.fondo }]}>
      
      {/* Título principal */}
      <Text style={[styles.title, { color: colors.texto }]}>
        Mi App con Temas
      </Text>
      
      {/* Subtítulo */}
      <Text style={[styles.subtitle, { color: colors.textoSecundario }]}>
        Ejemplo de colores simplificados
      </Text>
      
      {/* Tarjeta */}
      <View style={[styles.card, { 
        backgroundColor: colors.fondoTarjeta,
        borderColor: colors.bordeClaro,
        shadowColor: colors.sombra
      }]}>
        <Text style={[styles.cardTitle, { color: colors.texto }]}>
          Tarjeta de Ejemplo
        </Text>
        <Text style={[styles.cardText, { color: colors.textoSecundario }]}>
          Esta tarjeta usa fondoTarjeta para el fondo
        </Text>
      </View>
      
      {/* Input de ejemplo */}
      <View style={styles.inputGroup}>
        <Text style={[styles.label, { color: colors.texto }]}>
          Email
        </Text>
        <TextInput
          style={[styles.input, {
            backgroundColor: colors.fondoInput,
            borderColor: colors.borde,
            color: colors.texto
          }]}
          placeholder="Ingresa tu email"
          placeholderTextColor={colors.placeholder}
        />
      </View>
      
      {/* Botones */}
      <View style={styles.buttonContainer}>
        {/* Botón primario */}
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: colors.fondoBoton }]}
        >
          <Text style={[styles.buttonText, { color: colors.textoBoton }]}>
            Botón Primario
          </Text>
        </TouchableOpacity>
        
        {/* Botón secundario */}
        <TouchableOpacity 
          style={[styles.button, { 
            backgroundColor: colors.fondoBotonSecundario,
            borderColor: colors.borde,
            borderWidth: 1
          }]}
        >
          <Text style={[styles.buttonText, { color: colors.textoBotonSecundario }]}>
            Botón Secundario
          </Text>
        </TouchableOpacity>
        
        {/* Botón cambiar tema */}
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: colors.primario }]}
          onPress={toggleTheme}
        >
          <Text style={[styles.buttonText, { color: colors.textoBoton }]}>
            {isDarkMode ? '🌞 Tema Claro' : '🌙 Tema Oscuro'}
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Ejemplo de estados */}
      <View style={styles.stateContainer}>
        <View style={[styles.stateDot, { backgroundColor: colors.exitoso }]} />
        <Text style={[styles.stateText, { color: colors.texto }]}>Exitoso</Text>
        
        <View style={[styles.stateDot, { backgroundColor: colors.advertencia }]} />
        <Text style={[styles.stateText, { color: colors.texto }]}>Advertencia</Text>
        
        <View style={[styles.stateDot, { backgroundColor: colors.error }]} />
        <Text style={[styles.stateText, { color: colors.textoError }]}>Error</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 20,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  stateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  stateDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  stateText: {
    fontSize: 14,
    marginRight: 20,
  },
});

/*
=== RESUMEN DE COLORES DISPONIBLES ===

🎨 FONDOS:
- colors.fondo                 → Fondo principal
- colors.fondoTarjeta          → Fondo de cards/tarjetas  
- colors.fondoInput            → Fondo de inputs
- colors.fondoBoton            → Fondo botones principales
- colors.fondoBotonSecundario  → Fondo botones secundarios

📝 TEXTOS:
- colors.texto                 → Texto principal
- colors.textoSecundario       → Texto secundario/subtítulos
- colors.textoBoton            → Texto en botones principales
- colors.textoBotonSecundario  → Texto en botones secundarios
- colors.placeholder           → Texto placeholder

🔲 BORDES:
- colors.borde                 → Bordes normales
- colors.bordeClaro            → Bordes suaves
- colors.bordeFocused          → Borde cuando está enfocado

🎯 ESTADOS:
- colors.primario              → Color principal
- colors.secundario            → Color secundario
- colors.exitoso               → Verde para éxito
- colors.advertencia           → Naranja para advertencias
- colors.error                 → Rojo para errores
- colors.textoError            → Texto de error

✨ EFECTOS:
- colors.sombra                → Color de sombras
- colors.overlay               → Overlay/backdrop

🧭 NAVEGACIÓN:
- colors.tabActivo             → Tab activo
- colors.tabInactivo           → Tab inactivo
- colors.header                → Fondo del header

*/