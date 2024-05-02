import React from "react";
import { Pressable, StyleSheet, View, Text, Keyboard } from "react-native";

import telasContainerStyle from "../../comum/constantes/telasContainerStyle";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";

import CORES from "../../comum/constantes/cores";
import { FontAwesome5 } from "@expo/vector-icons";

import RNPickerSelect from "react-native-picker-select";
import pickerSelectStyles from "../../comum/constantes/pickerSelectStyles";

////////////////////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 32,
    borderColor: "#000",
    borderWidth: 2,
  },

  textoBotao: {
    color: CORES.TEXTO_CLARO,
  },
});

////////////////////////////////////////////////////////////////////////////////////////////////////

const TelaCalculadora = () => {
  const [campoNumUm, setCampoNumUm] = React.useState("");
  const [campoNumDois, setCampoNumDois] = React.useState("");
  const [campoOperacao, setCampoOperacao] = React.useState("+");
  const [resultOperacao, setResultoperacao] = React.useState("");

  const calculoOperacao = () => {
    let resultOp;
    switch (campoOperacao) {
      case "+":
        resultOp = +campoNumUm + +campoNumDois;
        break;
      case "-":
        resultOp = +campoNumUm - +campoNumDois;
        break;
      case "*":
        resultOp = +campoNumUm * +campoNumDois;
        break;
      case "/":
        resultOp = +campoNumUm / +campoNumDois;
        break;

      default:
        // setResultoperacao("Selecione uma Operação");
        break;
    }
    if (isNaN(resultOp)) {
      setResultoperacao("Error");
    } else {
      setResultoperacao(resultOp);
    }

    Keyboard.dismiss();
  };

  return (
    <View style={telasContainerStyle.container}>
      <View style={{ alignItems: "center" }}>
        <FontAwesome5 name="calculator" size={56} color="purple" />
      </View>

      <CampoTextoCustomizado
        label="Número Um"
        inputMode="numeric"
        value={campoNumUm}
        onChangeText={setCampoNumUm}
      />

      {/* inserir select aqui */}
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={setCampoOperacao}
        value={campoOperacao}
        items={[
          { label: "Somar", value: "+" },
          { label: "Subtrair", value: "-" },
          { label: "Multiplicar", value: "*" },
          { label: "Dividir", value: "/" },
        ]}
      />

      <CampoTextoCustomizado
        label="Número Dois"
        inputMode="numeric"
        value={campoNumDois}
        onChangeText={setCampoNumDois}
      />

      <Pressable style={styles.botao} onPress={calculoOperacao}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Resultado:</Text>
        <Text style={{ fontSize: 24, textAlign: "center", marginTop: 16 }}>
          {resultOperacao}
        </Text>
      </View>
    </View>
  );
};

export default TelaCalculadora;
