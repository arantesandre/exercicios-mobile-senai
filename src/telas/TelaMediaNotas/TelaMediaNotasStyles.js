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
    backgroundColor: CORES.AMARELO,
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
