import React from "react";
import { Pressable, View, Text, Keyboard } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import telasContainerStyle from "../../comum/constantes/telasContainerStyle";

import RNPickerSelect from "react-native-picker-select";
import pickerSelectStyles from "../../comum/constantes/pickerSelectStyles";
import styles from "./TelaCalculadoraStyles";
import CORES from "../../comum/constantes/cores";

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
      <View style={styles.containerIcon}>
        <FontAwesome5 name="calculator" size={56} color={CORES.ROXO} />
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

      <View style={styles.containerResultado}>
        <Text style={styles.tituloCampoResultado}>Resultado:</Text>
        <Text style={styles.textoCampoResultado}>{resultOperacao}</Text>
      </View>
    </View>
  );
};

export default TelaCalculadora;
