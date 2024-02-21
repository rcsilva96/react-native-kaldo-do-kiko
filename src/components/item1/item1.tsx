import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import { styles } from './item1Styles';

import venda1 from '../../services/vendaService'

export function Item1({ onVenda }: { onVenda: (quantidade: number, valorVenda: number) => void }) {
  const [quantidadeVendaItem1, setQuantidadeVendaItem1] = useState(0);
  const precoUnitario = 3.00;

  const handlePress = () => {
    setQuantidadeVendaItem1((prevQuantidade) => prevQuantidade + 1);
    onVenda(3, precoUnitario); // Notificar a página sobre a venda
    venda1(); // Chamar o serviço aqui se necessário
  };

  return (
    <Pressable
      onPress={handlePress}>

      <View style={styles.container}>

      <Image 
          source={require('../../../assets/neko.png')}
          style={styles.image} 
        />

        <Text style={styles.text}>Teste 1</Text>
        <Text style={styles.text}>R$ 3,00</Text>

        <Text style={styles.text}>Vendidos: {quantidadeVendaItem1}</Text>

      </View>

    </Pressable>
  );
}