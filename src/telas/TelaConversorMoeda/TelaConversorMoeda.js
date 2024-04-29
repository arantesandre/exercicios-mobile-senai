import React from "react";
import { View } from "react-native";
import telasContainerStyle from "../../comum/constantes/telasContainerStyle";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import { FontAwesome } from "@expo/vector-icons";

////////////////////////////////////////////////////////////////////////////////////////////////////

const TelaConversorMoeda = () => {
  const [campoReal, setCampoReal] = React.useState("");
  const [campoDolar, setCampoDolar] = React.useState("");
  const [campoEuro, setCampoEuro] = React.useState("");

  //FUNCAO PARA CONVERTER
  const valorDolar = 5.1;
  const valorEuro = 5.5;

  //REAL -> DOLAR -> EURO ////////////////////////////////////////
  const cambioRealDolarEuro = (campoReal) => {
    setCampoReal(campoReal);

    if (campoReal !== "") {
      setCampoDolar((parseFloat(campoReal) / valorDolar).toFixed(2).toString());
      setCampoEuro((parseFloat(campoReal) / valorEuro).toFixed(2).toString());
    } else {
      setCampoDolar("");
      setCampoEuro("");
    }
  };

  //DOLAR -> EURO -> REAL ////////////////////////////////////////
  const cambioDolarEuroReal = (campoDolar) => {
    setCampoDolar(campoDolar);

    if (campoDolar !== "") {
      setCampoReal((parseFloat(campoDolar) * valorDolar).toFixed(2).toString());
      setCampoEuro((parseFloat(campoDolar) * 0.93).toFixed(2).toString());
    } else {
      setCampoEuro("");
      setCampoReal("");
    }
  };

  //EURO -> REAL -> DOLAR ////////////////////////////////////////
  const cambioEuroRealDolar = (campoEuro) => {
    setCampoEuro(campoEuro);

    if (campoEuro !== "" || isNaN(campoEuro)) {
      setCampoReal((parseFloat(campoEuro) * valorEuro).toFixed(2).toString());
      setCampoDolar((parseFloat(campoEuro) * 1.07).toFixed(2).toString());
    } else {
      setCampoReal("");
      setCampoDolar("");
    }
  };

  return (
    <View style={telasContainerStyle.container}>
      <View style={{ alignItems: "center" }}>
        <FontAwesome name="money" size={48} color="blue" />
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
