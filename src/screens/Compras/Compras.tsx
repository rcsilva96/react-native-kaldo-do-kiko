import React from 'react';
import { View, Text, Switch } from 'react-native';

import { styles } from './ComprasStyles';

export function Compras({navigation}: any) {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Não se esqueça de comprar: </Text>

        <Text>Do you like React Native?</Text>
    </View>
  );
}