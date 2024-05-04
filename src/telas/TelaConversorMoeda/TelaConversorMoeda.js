import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import telasContainerStyle from "../../comum/constantes/telasContainerStyle";
import styles from "./TelaConversorMoedaStyles";
import CORES from "../../comum/constantes/cores";

const TelaConversorMoeda = () => {
  const [campoReal, setCampoReal] = React.useState("");
  const [campoDolar, setCampoDolar] = React.useState("");
  const [campoEuro, setCampoEuro] = React.useState("");

  //FUNCAO PARA CONVERTER
  const valorDolar = 5.1;
  const valorEuro = 5.5;

  //REAL -> DOLAR -> EURO
  const cambioRealDolarEuro = (campoReal) => {
    setCampoReal(campoReal);

    if (isNaN(campoReal)) {
      alert("Insira um valor válido");
      setCampoReal("");
    } else if (campoReal) {
      setCampoDolar((parseFloat(campoReal) / valorDolar).toFixed(2).toString());
      setCampoEuro((parseFloat(campoReal) / valorEuro).toFixed(2).toString());
    } else {
      setCampoDolar("");
      setCampoEuro("");
    }
  };

  //DOLAR -> EURO -> REAL
  const cambioDolarEuroReal = (campoDolar) => {
    setCampoDolar(campoDolar);

    if (isNaN(campoDolar)) {
      alert("Insira um valor válido");
      setCampoDolar("");
    } else if (campoDolar) {
      setCampoReal((parseFloat(campoDolar) * valorDolar).toFixed(2).toString());
      setCampoEuro((parseFloat(campoDolar) * 0.93).toFixed(2).toString());
    } else {
      setCampoEuro("");
      setCampoReal("");
    }
  };

  //EURO -> REAL -> DOLAR
  const cambioEuroRealDolar = (campoEuro) => {
    setCampoEuro(campoEuro);

    if (isNaN(campoEuro)) {
      alert("Insira um valor válido");
      setCampoEuro("");
    } else if (campoEuro) {
      setCampoReal((parseFloat(campoEuro) * valorEuro).toFixed(2).toString());
      setCampoDolar((parseFloat(campoEuro) * 1.07).toFixed(2).toString());
    } else {
      setCampoReal("");
      setCampoDolar("");
    }
  };

  return (
    <View style={telasContainerStyle.container}>
      <View style={styles.containerIcon}>
        <FontAwesome name="money" size={56} color={CORES.AZUL} />
      </View>

      <CampoTextoCustomizado
        label="Valor Real"
        inputMode="numeric"
        value={campoReal}
        onChangeText={cambioRealDolarEuro}
      />
      <CampoTextoCustomizado
        label="Valor Dolar"
        inputMode="numeric"
        value={campoDolar}
        onChangeText={cambioDolarEuroReal}
      />
      <CampoTextoCustomizado
        label="Valor Euro"
        inputMode="numeric"
        value={campoEuro}
        onChangeText={cambioEuroRealDolar}
      />
    </View>
  );
};

export default TelaConversorMoeda;
