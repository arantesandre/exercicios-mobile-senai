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
    backgroundColor: CORES.ROXO,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 32,
    borderColor: CORES.PRETO,
    borderWidth: 2,
  },

  textoBotao: {
    color: CORES.TEXTO_CLARO,
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
