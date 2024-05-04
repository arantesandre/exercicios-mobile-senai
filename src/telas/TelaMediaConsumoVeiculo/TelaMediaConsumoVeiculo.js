import React from "react";
import { View, Text, Pressable, Keyboard } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import telasContainerStyle from "../../comum/constantes/telasContainerStyle";
import styles from "./TelaMediaConsumoVeiculoStyles";
import CORES from "../../comum/constantes/cores";

const TelaMediaConsumoVeiculo = () => {
  const [campoDistancia, setCampoDistancia] = React.useState("");
  const [campoQuantCombustivel, setCampoQuantCombustivel] = React.useState("");
  const [campoResultado, setCampoResultado] = React.useState("");

  //CALCULO
  const calcularConsumo = () => {
    const resultadoConsumo =
      parseFloat(campoDistancia) / parseFloat(campoQuantCombustivel);

    if (campoDistancia == "" || campoQuantCombustivel == "") {
      alert("Preencha todos os campos antes de prosseguir.");
    } else if (isNaN(campoDistancia) || isNaN(campoQuantCombustivel)) {
      alert("Forneça apenas números");
    } else if (campoDistancia <= 0 || campoQuantCombustivel <= 0) {
      alert("Forneça valores maiores do que zero.");
    } else {
      setCampoResultado(`${resultadoConsumo.toFixed(1)} km/l`);
    }

    //fechar o teclado apos clicar em calcular
    Keyboard.dismiss();
  };

  return (
    <View style={telasContainerStyle.container}>
      <View style={styles.containerIcon}>
        <FontAwesome5 name="car" size={56} color={CORES.VERMELHO} />
      </View>

      <CampoTextoCustomizado
        label="Distância(km)"
        inputMode="numeric"
        value={campoDistancia}
        onChangeText={setCampoDistancia}
      />

      <CampoTextoCustomizado
        label="Quantidade de combustível(litros)"
        inputMode="numeric"
        value={campoQuantCombustivel}
        onChangeText={setCampoQuantCombustivel}
      />

      <Pressable style={styles.botao} onPress={calcularConsumo}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      <View style={styles.containerResultado}>
        <Text style={styles.tituloCampoResultado}>Resultado:</Text>
        <Text style={styles.textoCampoResultado}>{campoResultado}</Text>
      </View>
    </View>
  );
};

export default TelaMediaConsumoVeiculo;
