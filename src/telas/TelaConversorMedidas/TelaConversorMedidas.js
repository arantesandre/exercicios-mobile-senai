import React from "react";
import { View } from "react-native";
import telasContainerStyle from "../../comum/constantes/telasContainerStyle";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

////////////////////////////////////////////////////////////////////////////////////////////////////

const TelaConversorMedidas = () => {
  const [campoCentimetro, setCampoCentimetro] = React.useState("");
  const [campoMetro, setCampoMetro] = React.useState("");
  const [campoQuilometro, setCampoQuilometro] = React.useState("");

  //FUNCOES

  //CM -> METRO -> KM
  const convertCmMtKm = (campoCentimetro) => {
    setCampoCentimetro(campoCentimetro);

    if (isNaN(campoCentimetro)) {
      alert("Insira um valor válido");
      setCampoCentimetro("");
    } else if (campoCentimetro !== "") {
      setCampoMetro((campoCentimetro / 100).toString());
      setCampoQuilometro((campoCentimetro / 100000).toString());
    } else {
      setCampoMetro("");
      setCampoQuilometro("");
    }
  };

  //METRO -> KM -> CM
  const convertMtKmCm = (campoMetro) => {
    setCampoMetro(campoMetro);

    if (isNaN(campoMetro)) {
      alert("Insira um valor válido");
      setCampoMetro("");
    } else if (campoMetro !== "") {
      setCampoQuilometro((campoMetro / 1000).toString());
      setCampoCentimetro((campoMetro * 100).toString());
    } else {
      setCampoQuilometro("");
      setCampoCentimetro("");
    }
  };

  //KM -> CM -> METRO
  const convertKmCmMt = (campoQuilometro) => {
    setCampoQuilometro(campoQuilometro);

    if (isNaN(campoQuilometro)) {
      alert("Insira um valor válido");
      setCampoQuilometro("");
    } else if (campoQuilometro !== "") {
      setCampoCentimetro((campoQuilometro * 100000).toString());
      setCampoMetro((campoQuilometro * 1000).toString());
    } else {
      setCampoCentimetro("");
      setCampoMetro("");
    }
  };

  return (
    <View style={telasContainerStyle.container}>
      <View style={{ alignItems: "center" }}>
        <FontAwesome5 name="ruler" size={56} color="green" />
      </View>

      <CampoTextoCustomizado
        label="Centímetros"
        inputMode="numeric"
        value={campoCentimetro}
        onChangeText={convertCmMtKm}
      />
      <CampoTextoCustomizado
        label="Metros"
        inputMode="numeric"
        value={campoMetro}
        onChangeText={convertMtKmCm}
      />
      <CampoTextoCustomizado
        label="Quilômetros"
        inputMode="numeric"
        value={campoQuilometro}
        onChangeText={convertKmCmMt}
      />
    </View>
  );
};

export default TelaConversorMedidas;
