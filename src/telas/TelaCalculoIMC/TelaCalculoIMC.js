import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import telasContainerStyle from "../../comum/constantes/telasContainerStyle";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";

import { FontAwesome5 } from "@expo/vector-icons";
import CORES from "../../comum/constantes/cores";
import React from "react";

////////////////////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    borderBottomLeftRadius: 48,
    borderTopRightRadius: 48,
  },

  textoBotao: {
    color: CORES.TEXTO_CLARO,
  },
});

////////////////////////////////////////////////////////////////////////////////////////////////////

const TelaCalculoIMC = () => {
  const [campoAltura, setCampoAltura] = React.useState("");
  const [campoPeso, setCampoPeso] = React.useState("");
  const [imc, setImc] = React.useState("");
  // const [statusImc, setStatusImc] = React.useState("");

  const cacularIMC = () => {
    //peso / altura * altura
    let calculoImc = campoPeso / (campoAltura * campoAltura);
    calculoImc = calculoImc.toFixed(2);

    let status;

    if (calculoImc < 18.5) {
      status = "Abaixo do peso";
    } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
      status = "Peso normal";
    } else if (calculoImc >= 25 && calculoImc <= 29.99) {
      status = "Sobrepeso";
    } else if (calculoImc >= 30 && calculoImc <= 34.99) {
      status = "Obesidade Grau I";
    } else if (calculoImc >= 35 && calculoImc <= 39.99) {
      status = "Obesidade Grau II (severa)";
    } else if (calculoImc >= 40) {
      status = "Obesidade Grau III (mórbida)";
    }
    setImc(`${calculoImc} - ${status}`);
    // setImc(calculoImc.toFixed(2));
    Keyboard.dismiss();
    // console.log(calculoImc);
  };

  return (
    <View style={telasContainerStyle.container}>
      <View style={{ alignItems: "center" }}>
        <FontAwesome5 name="balance-scale" size={48} color="gray" />
      </View>

      <CampoTextoCustomizado
        label="Altura(m)"
        value={campoAltura}
        inputMode="numeric"
        onChangeText={setCampoAltura}
      />
      <CampoTextoCustomizado
        label="Peso(kg)"
        value={campoPeso}
        inputMode="numeric"
        onChangeText={setCampoPeso}
      />

      <Pressable style={styles.botao} onPress={cacularIMC}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Resultado:</Text>
        <Text style={{ fontSize: 24, textAlign: "center", marginTop: 8 }}>
          {imc}
        </Text>
      </View>
    </View>
  );
};

export default TelaCalculoIMC;
