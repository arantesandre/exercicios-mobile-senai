import { View, Text, Pressable } from "react-native";
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { faFaceGrinStars } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import TELAS from "../../comum/constantes/telas";
import styles from "./TelaInicialStyles";

const TelaInicial = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Text style={styles.containerIconTitulo}>Bem-vindo!</Text>
        {/* <MaterialIcons name='sentiment-very-satisfied' size={40} color='green' /> */}
        <FontAwesomeIcon icon={faFaceGrinStars} size={32} color="green" />
      </View>

      <Pressable
        style={styles.botao1}
        onPress={() => props.navigation.navigate(TELAS.TELA_CONSUMO_VEICULO)}
      >
        <Text style={styles.textoBotao1}>Média Consumo Veículo</Text>
      </Pressable>

      <Pressable
        style={styles.botao2}
        onPress={() => props.navigation.navigate(TELAS.TELA_CONVERSOR_MOEDA)}
      >
        <Text style={styles.textoBotao2}>Conversor de Moeda</Text>
      </Pressable>

      <Pressable
        style={styles.botao3}
        onPress={() => props.navigation.navigate(TELAS.TELA_CONVERSOR_MEDIDAS)}
      >
        <Text style={styles.textoBotao3}>Conversor de Medidas</Text>
      </Pressable>

      <Pressable
        style={styles.botao4}
        onPress={() => props.navigation.navigate(TELAS.TELA_MEDIA_NOTAS)}
      >
        <Text style={styles.textoBotao4}>Calcular Média de Notas</Text>
      </Pressable>

      <Pressable
        style={styles.botao5}
        onPress={() => props.navigation.navigate(TELAS.TELA_CALCULADORA)}
      >
        <Text style={styles.textoBotao5}>Calculadora</Text>
      </Pressable>

      <Pressable
        style={styles.botao6}
        onPress={() => props.navigation.navigate(TELAS.TELA_REAJUSTE_SALARIAL)}
      >
        <Text style={styles.textoBotao6}>Calcular Reajuste Salarial</Text>
      </Pressable>

      <Pressable
        style={styles.botao7}
        onPress={() => props.navigation.navigate(TELAS.TELA_CALCULO_IMC)}
      >
        <Text style={styles.textoBotao7}>Cálculo IMC</Text>
      </Pressable>
    </View>
  );
};

export default TelaInicial;
