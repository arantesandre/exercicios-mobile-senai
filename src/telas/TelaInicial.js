import { View, Text, StyleSheet, Pressable } from 'react-native'
import TELAS from '../comum/constantes/telas';
import CORES from '../comum/constantes/cores';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 16,
    },
    botao1: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderRadius: 50,
       
    },
    textoBotao1: {
        color: CORES.TEXTO_CLARO
    },

});

const TelaInicial = (props) => {

    return (

        <View style={styles.container}>

            <Pressable style={styles.botao1} onPress={() => props.navigation.navigate(TELAS.TELA_CONSUMO_VEICULO)}>
                <Text style={styles.textoBotao1}>Média Consumo Veículo</Text>
            </Pressable>

            <Pressable style={styles.botao1} onPress={() => props.navigation.navigate(TELAS.TELA_CONSUMO_VEICULO)}>
                <Text style={styles.textoBotao1}>Média Consumo Veículo</Text>
            </Pressable>

        </View>

    );

};

export default TelaInicial;