import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './paginaVendasStyles';

import { HeaderKiko } from '../../components/headerKiko/headerKiko';

import { Item1 } from '../../components/item1/item1';
import { Item2 } from '../../components/item2/item2';
import { Item3 } from '../../components/item3/item3';
import { Item4 } from '../../components/item4/item4';

export function PaginaVendas({navigation}: any) {

  const [totalVendas, setTotalVendas] = useState(0);

  const handleVenda = (valorVenda: number) => {
    setTotalVendas((prevTotal1) => prevTotal1 + valorVenda);
  }


  return (
    <View style={styles.container}>

      <HeaderKiko />

      <View style={styles.displayRow}>


          <Item1 onVenda={handleVenda}/>


        <Item2 onVenda={handleVenda}/>

      </View>

      <View style={styles.displayRow}>

        <Item3 onVenda={handleVenda}/>
        <Item4 onVenda={handleVenda}/>

      </View>

      <Text style={styles.texto}>Total de vendas: R$ {totalVendas.toFixed(2)}</Text>

    </View>
  );
}