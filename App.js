import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import TELAS from './src/comum/constantes/telas';
// import CORES from './src/comum/constantes/cores';

//importando navegacao
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importacao das telas
import TelaInicial from './src/telas/TelaInicial/TelaInicial';
import TelaMediaConsumoVeiculo from './src/telas/TelaMediaConsumoVeiculo/TelaMediaConsumoVeiculo';
import TelaConversorMoeda from './src/telas/TelaConversorMoeda/TelaConversorMoeda';
import TelaConversorMedidas from './src/telas/TelaConversorMedidas/TelaConversorMedidas';
import TelaMediaNotas from './src/telas/TelaMediaNotas/TelaMediaNotas';
import TelaCalculadora from './src/telas/TelaCalculadora/TelaCalculadora';
import TelaReajusteSalarial from './src/telas/TelaReajusteSalarial/TelaReajusteSalarial';
import TelaCalculoIMC from './src/telas/TelaCalculoIMC/TelaCalculoIMC';

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

          <Stack.Screen name={TELAS.TELA_CONVERSOR_MOEDA} component={TelaConversorMoeda} options={{ title: 'Conversor de Moeda' }} />

          <Stack.Screen name={TELAS.TELA_CONVERSOR_MEDIDAS} component={TelaConversorMedidas} options={{ title: 'Conversor de Medidas' }} />

          <Stack.Screen name={TELAS.TELA_MEDIA_NOTAS} component={TelaMediaNotas} options={{ title: 'Cálculo Média de Notas' }} />

          <Stack.Screen name={TELAS.TELA_CALCULADORA} component={TelaCalculadora} options={{ title: 'Calculadora' }} />

          <Stack.Screen name={TELAS.TELA_REAJUSTE_SALARIAL} component={TelaReajusteSalarial} options={{ title: 'Cálculo Reajuste Salarial' }} />

          <Stack.Screen name={TELAS.TELA_CALCULO_IMC} component={TelaCalculoIMC} options={{ title: 'Cálculo IMC' }} />

        </Stack.Navigator>

      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
};

