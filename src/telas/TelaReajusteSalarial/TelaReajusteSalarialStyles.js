import { StyleSheet } from "react-native";
import CORES from "../../comum/constantes/cores";

const styles = StyleSheet.create({
  containerIcon: {
    alignItems: "center",
  },

  containerResultado: {
    marginTop: 16,
  },

  containerSwitch: {
    alignItems: "flex-start",
  },

  botao: {
    backgroundColor: CORES.LARANJA,
    justifyContent: "center",
    height: 48,
    borderBottomLeftRadius: 48,
    borderTopRightRadius: 48,
  },

  textoBotao: {
    color: CORES.TEXTO_PADRAO,
    padding: 16,
  },

  tituloCampoResultado: {
    fontSize: 24,
    fontWeight: "bold",
  },

  textoCampoResultado: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 16,
  },
});

export default styles;
