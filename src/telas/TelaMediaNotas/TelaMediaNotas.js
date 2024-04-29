import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import telasContainerStyle from "../../comum/constantes/telasContainerStyle";

import Ionicons from "@expo/vector-icons/Ionicons";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import CORES from "../../comum/constantes/cores";
import React from "react";

////////////////////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "flex-end",
    height: 56,
    borderRadius: 16,
    borderColor: "#000",
    borderWidth: 2,
    borderStyle: "dotted",
  },

  textoBotao: {
    color: CORES.TEXTO_PADRAO,
    padding: 16,
  },
});

////////////////////////////////////////////////////////////////////////////////////////////////////

const TelaMediaNotas = () => {
  const [campoAv1, setCampoAv1] = React.useState("");
  const [campoAv2, setCampoAv2] = React.useState("");
  const [campoNotaSA, setCampoNotaSA] = React.useState("");
  const [resultadMedia, setResultadoMedia] = React.useState("");
  const [status, setStatus] = React.useState("");

  //calculo media

  const calculoMediaNotas = () => {
    const pesoNotaSA = campoNotaSA * 2;
    const mediaNotas = (+campoAv1 + +campoAv2 + +pesoNotaSA) / 3;

    if (mediaNotas >= 7) {
      setStatus("(APROVADO)");
    } else {
      setStatus("(REPROVADO)");
    }

    setResultadoMedia(mediaNotas.toFixed(2));
    Keyboard.dismiss();
  };

  return (
    <View style={telasContainerStyle.container}>
      <View style={{ alignItems: "center" }}>
        <Ionicons name="document-text-outline" size={48} color="yellow" />
      </View>

      <CampoTextoCustomizado
        label="AV1"
        inputMode="numeric"
        value={campoAv1}
        onChangeText={setCampoAv1}
      />
      <CampoTextoCustomizado
        label="AV2"
        inputMode="numeric"
        value={campoAv2}
        onChangeText={setCampoAv2}
      />
      <CampoTextoCustomizado
        label="Nota SA"
        inputMode="numeric"
        value={campoNotaSA}
        onChangeText={setCampoNotaSA}
      />

      <Pressable style={styles.botao} onPress={calculoMediaNotas}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Resultado:</Text>
        <Text style={{ fontSize: 24, textAlign: "center", marginTop: 16 }}>
          {resultadMedia} {status}
        </Text>
      </View>
    </View>
  );
};

export default TelaMediaNotas;
