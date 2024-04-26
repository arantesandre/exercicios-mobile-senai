import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import TELAS from './src/comum/constantes/telas';
// import CORES from './src/comum/constantes/cores';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './src/telas/TelaInicial';
import TelaMediaConsumoVeiculo from './src/telas/TelaMediaConsumoVeiculo';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: CORES.FUNDO_PADRAO,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen name={TELAS.TELA_INICIAL} component={TelaInicial} options={{ title: 'Tela Inicial' }} />

          <Stack.Screen name={TELAS.TELA_CONSUMO_VEICULO} component={TelaMediaConsumoVeiculo} options={{ title: 'Média Consumo Veículo' }} />

        </Stack.Navigator>

      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
};

