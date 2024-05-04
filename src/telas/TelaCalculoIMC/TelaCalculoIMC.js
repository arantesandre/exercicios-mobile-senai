import React from "react";
import { Keyboard, Pressable, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import telasContainerStyle from "../../comum/constantes/telasContainerStyle";
import styles from "./TelaCalculoIMCStyles";
import CORES from "../../comum/constantes/cores";

const TelaCalculoIMC = () => {
  const [campoAltura, setCampoAltura] = React.useState("");
  const [campoPeso, setCampoPeso] = React.useState("");
  const [imc, setImc] = React.useState("");

  const cacularIMC = () => {
    //peso / altura * altura
    let calculoImc = +campoPeso / (+campoAltura * +campoAltura);
    calculoImc = calculoImc.toFixed(2);

    let status;

    if (
      isNaN(campoAltura) ||
      isNaN(campoPeso) ||
      campoAltura <= 0 ||
      campoPeso <= 0
    ) {
      alert(
        "Ops! \n\n -> Verifique se os campos contém valores válidos \n\n -> Forneça valores acima de zero"
      );
    } else {
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
    }

    Keyboard.dismiss();
  };

  return (
    <View style={telasContainerStyle.container}>
      <View style={styles.containerIcon}>
        <FontAwesome5 name="balance-scale" size={56} color={CORES.CINZA} />
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

      <View style={styles.containerResultado}>
        <Text style={styles.tituloCampoResultado}>Resultado:</Text>
        <Text style={styles.textoCampoResultado}>{imc}</Text>
      </View>
    </View>
  );
};

export default TelaCalculoIMC;
