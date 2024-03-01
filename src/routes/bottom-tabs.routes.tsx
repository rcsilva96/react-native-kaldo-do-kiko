import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation, Feather } from '@expo/vector-icons'

import { PaginaVendas } from "../screens/paginaVendas/paginaVendas";
import { Compras } from "../screens/Compras/Compras";
import { Relatorios } from "../screens/Relatorios/Relatorios";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes() {

    return (

        <Navigator>

            <Screen
                name='vendas'
                component={PaginaVendas}
                options={{
                    title: 'Vendas',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name='dollar-sign'
                            color='green'
                            size={36}
                        />
                    )
                }}
            />

            <Screen
                name='compras'
                component={Compras}
                options={{
                    title: 'Compras',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name='shopping-cart'
                            color='black'
                            size={36}
                        />
                    )
                }}
            />

            <Screen
                name='relatorios'
                component={Relatorios}
                options={{
                    title: 'Relatórios',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Foundation
                            name='graph-trend'
                            color='black'
                            size={36}
                        />
                    )
                }}
            />

        </Navigator>

    )

}