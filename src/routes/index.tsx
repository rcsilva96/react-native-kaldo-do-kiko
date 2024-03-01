import { NavigationContainer } from '@react-navigation/native'


// Contexto de roteamento

import { BottomTabsRoutes } from './bottom-tabs.routes'

export function Routes() {

    // Caixa  de contextos

    return (

        <NavigationContainer>

            <BottomTabsRoutes />

        </NavigationContainer>

    )

}