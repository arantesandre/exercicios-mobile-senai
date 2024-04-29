import { Text, TextInput, View } from "react-native";
import CampoTextoCustomizadoStyle from "./CampoTextoCustomizadoStyle";


const CampoTextoCustomizado = (props) => {
  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput style={CampoTextoCustomizadoStyle.campoTexto} {...props} />
    </View>
  );
};

export default CampoTextoCustomizado;
