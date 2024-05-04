import React from "react";
import { Keyboard, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import telasContainerStyle from "../../comum/constantes/telasContainerStyle";
import styles from "./TelaMediaNotasStyles";
import CORES from "../../comum/constantes/cores";

const TelaMediaNotas = () => {
  const [campoAv1, setCampoAv1] = React.useState("");
  const [campoAv2, setCampoAv2] = React.useState("");
  const [campoNotaSA, setCampoNotaSA] = React.useState("");
  const [resultadMedia, setResultadoMedia] = React.useState("");
  const [status, setStatus] = React.useState("");

  //calculo media

  const calculoMediaNotas = () => {
    const pesoNotaSA = campoNotaSA * 2;
    const mediaNotas = (+campoAv1 + +campoAv2 + +pesoNotaSA) / 4;

    if (isNaN(campoAv1) || isNaN(campoAv2) || isNaN(campoNotaSA)) {
      alert("Apenas números são aceitos");
    } else if (campoAv1 < 0 || campoAv2 < 0 || campoNotaSA < 0) {
      alert("Números negativos não são aceitos");
    } else {
      if (mediaNotas >= 7) {
        setStatus("(APROVADO)");
      } else {
        setStatus("(REPROVADO)");
      }

      setResultadoMedia(mediaNotas.toFixed(2));
    }

    Keyboard.dismiss();
  };

  return (
    <View style={telasContainerStyle.container}>
      <View style={styles.containerIcon}>
        <Ionicons
          name="document-text-outline"
          size={56}
          color={CORES.AMARELO}
        />
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

      <View style={styles.containerResultado}>
        <Text style={styles.tituloCampoResultado}>Resultado:</Text>
        <Text style={styles.textoCampoResultado}>
          {resultadMedia} {status}
        </Text>
      </View>
    </View>
  );
};

export default TelaMediaNotas;
