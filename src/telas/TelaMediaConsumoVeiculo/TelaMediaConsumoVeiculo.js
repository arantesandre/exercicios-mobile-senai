import React from "react";
import { View, StyleSheet, Pressable, Text, Keyboard } from "react-native";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import telasContainerStyle from "../../comum/constantes/telasContainerStyle";
import CORES from "../../comum/constantes/cores";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

/////////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "red",
    height: 48,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotao: {
    color: CORES.BRANCA,
  },
});

/////////////////////////////////////////////////////////////////////////////////////////

const TelaMediaConsumoVeiculo = () => {
  const [campoDistancia, setCampoDistancia] = React.useState("");
  const [campoQuantCombustivel, setCampoQuantCombustivel] = React.useState("");
  const [campoResultado, setCampoResultado] = React.useState("");

  //CALCULO
  const calcularConsumo = () => {
    const resultadoConsumo = campoDistancia / campoQuantCombustivel;

    if (campoDistancia == "" || campoQuantCombustivel == "") {
      alert("Preencha todos os campos antes de prosseguir.");

      campoDistancia.curre;
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
      <View style={{ alignItems: "center" }}>
        <FontAwesome5 name="car" size={48} color="red" />
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

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Resultado:</Text>
        <Text style={{ fontSize: 24, textAlign: "center", marginTop: 16}}>
          {campoResultado}
        </Text>
      </View>
    </View>
  );
};

export default TelaMediaConsumoVeiculo;
