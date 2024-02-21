import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './headerKikoStyles';

export function HeaderKiko() {
  return (
    <View>
        <Text style={styles.texto}>Kaldo do Kiko</Text>
    </View>
  );
}