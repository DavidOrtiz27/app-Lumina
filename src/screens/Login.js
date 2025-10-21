import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import IconSvg from '../components/IconSvg';
import globalStyles from '../styles/globalStyles';
import { getTheme } from '../theme/simplifiedColors';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const colorScheme = useColorScheme();
    const colors = getTheme(colorScheme === 'dark');

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Por favor completa todos los campos');
            return;
        }

        // Aquí puedes agregar tu lógica de autenticación
        Alert.alert('Login', 'Iniciando sesión...');
    };

    return (
        <SafeAreaProvider style={[globalStyles.safeAreaProvider, { backgroundColor: colors.fondo }]}>
            <SafeAreaView style={globalStyles.safeArea}>
                <View style={[globalStyles.container, { backgroundColor: colors.fondo }]}>
                    <View style={globalStyles.logoContainer}>
                        <IconSvg width={120} height={120} shadowColor={colors.primario} />
                        <Text style={[globalStyles.title, { color: colors.primario }]}>LUMINA</Text>
                    </View>

                    <View style={[globalStyles.inputContainer, { backgroundColor: colors.fondoTarjeta }]}>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{
                                color: colors.texto,
                                fontSize: 16,
                                fontWeight: '600',
                                marginBottom: 8,
                                marginLeft: 4
                            }}>Email</Text>
                            <TextInput
                                style={[globalStyles.input, {
                                    color: colors.texto,
                                    backgroundColor: colors.fondo,
                                    borderColor: colors.borde,
                                    width: 280,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    padding: 12,
                                    marginBottom: 20
                                }]}
                                placeholder="Email"
                                placeholderTextColor={colors.textoSecundario}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                            <Text style={{
                                color: colors.texto,
                                fontSize: 16,
                                fontWeight: '600',
                                marginBottom: 8,
                                marginLeft: 4
                            }}>Contraseña</Text>
                            <TextInput
                                style={[globalStyles.input, {
                                    color: colors.texto,
                                    backgroundColor: colors.fondo,
                                    borderColor: colors.borde,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    padding: 12,
                                    marginBottom: 10
                                }]}
                                placeholder="Contraseña"
                                placeholderTextColor={colors.textoSecundario}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>

                        <TouchableOpacity
                            style={{
                                backgroundColor: colors.primario,
                                ...globalStyles.buttonLogin
                            }}
                            onPress={handleLogin}
                        >
                            <Text style={{
                                color: colors.textoBoton,
                                fontSize: 16,
                                fontWeight: 'bold'
                            }}>
                                Iniciar Sesión
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={globalStyles.link}
                            onPress={() => Alert.alert('Info', 'Funcionalidad próximamente')}
                        >
                            <Text style={{
                                color: colors.textoSecundario,
                                fontSize: 14
                            }}>
                                ¿Olvidaste tu contraseña?
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
