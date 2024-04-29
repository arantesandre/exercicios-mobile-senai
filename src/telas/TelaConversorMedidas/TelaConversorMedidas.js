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
    setCampoMetro((campoCentimetro / 100).toString());
    setCampoQuilometro((campoCentimetro / 100000).toString());
    console.log(campoCentimetro);
  };

  //METRO -> KM -> CM
  const convertMtKmCm = (campoMetro) => {
    setCampoMetro(campoMetro);
    setCampoQuilometro((campoMetro / 1000).toString());
    setCampoCentimetro((campoMetro * 100).toString());
    console.log(campoMetro);
  };

  //KM -> CM -> METRO
  const convertKmCmMt = (campoQuilometro) => {
    setCampoQuilometro(campoQuilometro);
    setCampoCentimetro((campoQuilometro * 100000).toString());
    setCampoMetro((campoQuilometro * 1000).toString());
    console.log(campoQuilometro);
  };

  return (
    <View style={telasContainerStyle.container}>
      <View style={{ alignItems: "center" }}>
        <FontAwesome5 name="ruler" size={48} color="green" />
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
