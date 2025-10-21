import { Button } from '@react-navigation/elements';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  logoContainer: {
    marginTop: -80,
    alignItems: 'center',
    width: '100%',
  },

  title: {
    fontSize: 60,
    fontWeight: '800',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },

  safeAreaProvider: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  inputContainer: {
    width: '95%',
    height: '39%',
    padding: 30,
    borderRadius: 20,
    marginTop: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 12,
  },

  buttonLogin: {
    height: '20%',
    width: '70%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16
  },

  link: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
    alignItems: 'center',
    textDecorationLine: 'underline',
  }

});

export default globalStyles;
