import { StyleSheet } from "react-native";
import CORES from "../../comum/constantes/cores";

const styles = StyleSheet.create({
  containerIcon: {
    alignItems: "center",
  },

  containerResultado: {
    marginTop: 16,
  },

  botao: {
    backgroundColor: CORES.VERMELHO,
    height: 48,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotao: {
    color: CORES.BRANCA,
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
