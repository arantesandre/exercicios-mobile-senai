import {
  Keyboard,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

import telasContainerStyle from "../../comum/constantes/telasContainerStyle";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import CORES from "../../comum/constantes/cores";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";

////////////////////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "orange",
    justifyContent: "center",
    height: 48,
    borderBottomLeftRadius: 48,
    borderTopRightRadius: 48,
  },

  textoBotao: {
    color: CORES.TEXTO_PADRAO,
    padding: 16,
  },
});

////////////////////////////////////////////////////////////////////////////////////////////////////

const TelaReajusteSalarial = () => {
  const [campoSalario, setCampoSalario] = React.useState("");
  const [campoCargoConfianca, setCampoCargoConfianca] = React.useState(false);
  const [novoSalario, setNovoSalario] = React.useState("");
  //   console.log(campoSalario);

  //CALCULO
  //   const calculoReajuste = () => {
  //     let reajuste;

  //     if (campoSalario <= 2000 && campoCargoConfianca === true) {
  //       reajuste = campoSalario * 0.08;
  //       setNovoSalario(parseFloat(campoSalario) + reajuste);
  //     } else if (
  //       campoSalario > 2000 && campoSalario <= 3000 && campoCargoConfianca === true) {
  //       reajuste = campoSalario * 0.07;
  //       setNovoSalario(parseFloat(campoSalario) + reajuste);
  //     } else if (
  //       campoSalario > 3000 && campoSalario <= 4000 && campoCargoConfianca === true) {
  //       reajuste = campoSalario * 0.06;
  //       setNovoSalario(parseFloat(campoSalario) + reajuste);
  //     } else if (campoSalario >= 5000 && campoCargoConfianca === true) {
  //       reajuste = campoSalario * 0.05;
  //       setNovoSalario(parseFloat(campoSalario) + reajuste);
  //     } else {
  //       setNovoSalario(campoSalario);
  //     }

  //     Keyboard.dismiss();
  //   };

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
      <View style={{ alignItems: "center" }}>
        <FontAwesome name="money" size={48} color="orange" />
      </View>

      <CampoTextoCustomizado
        label="Salário atual"
        inputMode="numeric"
        value={campoSalario}
        onChangeText={setCampoSalario}
      />

      <View style={{ alignItems: "flex-start" }}>
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

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Resultado:</Text>
        <Text style={{ fontSize: 24, textAlign: "center", marginTop: 16 }}>
          {novoSalario}
        </Text>
      </View>
    </View>
  );
};

export default TelaReajusteSalarial;
