import { StyleSheet } from "react-native";
import CORES from "../../comum/constantes/cores";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },

  containerIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  containerIconTitulo: {
    fontSize: 32,
  },

  botao1: {
    backgroundColor: CORES.VERMELHO,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    borderRadius: 50,
  },
  textoBotao1: {
    color: CORES.TEXTO_CLARO,
  },

  botao2: {
    backgroundColor: CORES.AZUL,
    justifyContent: "center",
    height: 48,
    borderRadius: 16,
  },
  textoBotao2: {
    color: CORES.TEXTO_CLARO,
    padding: 16,
  },

  botao3: {
    backgroundColor: CORES.VERDE,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    borderTopLeftRadius: 48,
    borderBottomRightRadius: 48,
  },
  textoBotao3: {
    color: CORES.TEXTO_CLARO,
  },

  botao4: {
    backgroundColor: CORES.AMARELO,
    justifyContent: "center",
    alignItems: "flex-end",
    height: 56,
    borderRadius: 16,
    borderColor: CORES.PRETO,
    borderWidth: 2,
    borderStyle: "dotted",
  },

  textoBotao4: {
    color: CORES.TEXTO_PADRAO,
    padding: 16,
  },

  botao5: {
    backgroundColor: CORES.ROXO,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 32,
    borderColor: CORES.PRETO,
    borderWidth: 2,
  },

  textoBotao5: {
    color: CORES.TEXTO_CLARO,
  },

  botao6: {
    backgroundColor: CORES.LARANJA,
    justifyContent: "center",
    height: 48,
    borderBottomLeftRadius: 48,
    borderTopRightRadius: 48,
  },

  textoBotao6: {
    color: CORES.TEXTO_PADRAO,
    padding: 16,
  },

  botao7: {
    backgroundColor: CORES.CINZA,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    borderTopLeftRadius: 48,
    borderBottomRightRadius: 48,
  },

  textoBotao7: {
    color: CORES.TEXTO_CLARO,
  },
});

export default styles;
