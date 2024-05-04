import React from "react";
import { Keyboard, Pressable, Switch, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import telasContainerStyle from "../../comum/constantes/telasContainerStyle";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";

import styles from "./TelaReajusteSalarialStyles";
import CORES from "../../comum/constantes/cores";

const TelaReajusteSalarial = () => {
  const [campoSalario, setCampoSalario] = React.useState("");
  const [campoCargoConfianca, setCampoCargoConfianca] = React.useState(false);
  const [novoSalario, setNovoSalario] = React.useState("");

  const calculoReajuste = () => {
    let reajuste;
    const reajusteCargoConfianca = campoSalario * 0.05;

    if (campoSalario <= 2000) {
      reajuste = +campoSalario + campoSalario * 0.08;
      if (campoCargoConfianca === true) {
        setNovoSalario("R$ " + (reajuste + reajusteCargoConfianca).toFixed(2));
      } else {
        setNovoSalario("R$ " + parseFloat(reajuste).toFixed(2));
      }
    } else if (campoSalario > 2000 && campoSalario <= 3000) {
      reajuste = +campoSalario + campoSalario * 0.07;
      if (campoCargoConfianca === true) {
        setNovoSalario("R$ " + (reajuste + reajusteCargoConfianca).toFixed(2));
      } else {
        setNovoSalario("R$ " + parseFloat(reajuste).toFixed(2));
      }
    } else if (campoSalario > 3000 && campoSalario <= 4999.99) {
      reajuste = +campoSalario + campoSalario * 0.06;
      if (campoCargoConfianca === true) {
        setNovoSalario("R$ " + (reajuste + reajusteCargoConfianca).toFixed(2));
      } else {
        setNovoSalario("R$ " + parseFloat(reajuste).toFixed(2));
      }
    } else {
      reajuste = +campoSalario + campoSalario * 0.05;
      if (campoCargoConfianca === true) {
        setNovoSalario("R$ " + (reajuste + reajusteCargoConfianca).toFixed(2));
      } else {
        setNovoSalario("R$ " + parseFloat(reajuste).toFixed(2));
      }
    }

    Keyboard.dismiss();
  };

  return (
    <View style={telasContainerStyle.container}>
      <View style={styles.containerIcon}>
        <FontAwesome name="money" size={56} color={CORES.LARANJA} />
      </View>

      <CampoTextoCustomizado
        label="Salário atual"
        inputMode="numeric"
        value={campoSalario}
        onChangeText={setCampoSalario}
      />

      <View style={styles.containerSwitch}>
        <Text>Cargo de confiança</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#ffa50055" }}
          thumbColor={campoCargoConfianca ? "#ffa500" : "#f4f3f4"}
          onValueChange={setCampoCargoConfianca}
          value={campoCargoConfianca}
        />
      </View>

      <Pressable style={styles.botao} onPress={calculoReajuste}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      <View style={styles.containerResultado}>
        <Text style={styles.tituloCampoResultado}>Resultado:</Text>
        <Text style={styles.textoCampoResultado}>{novoSalario}</Text>
      </View>
    </View>
  );
};

export default TelaReajusteSalarial;
