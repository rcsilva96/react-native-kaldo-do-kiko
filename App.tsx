import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { PaginaVendas } from './src/screens/paginaVendas/paginaVendas';

export default function App() {
  return (
    <View style={styles.container}>

      <PaginaVendas />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
