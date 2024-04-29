import { View, Text, StyleSheet, Pressable } from 'react-native'
import TELAS from '../../comum/constantes/telas';
import CORES from '../../comum/constantes/cores';

// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { faFaceGrinStars } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


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

    botao2: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        height: 48,
        borderRadius: 16,
       
    },
    textoBotao2: {
        color: CORES.TEXTO_CLARO,
        padding: 16,
    },

    botao3: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderTopLeftRadius: 48,
        borderBottomRightRadius: 48,
       
    },
    textoBotao3: {
        color: CORES.TEXTO_CLARO
    },

    botao4: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 56,
        borderRadius: 16,
        borderColor: '#000',
        borderWidth: 2,
        borderStyle: 'dotted'
       
    },

    textoBotao4: {
        color: CORES.TEXTO_PADRAO,
        padding: 16

    },

    botao5: {
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        borderRadius: 32,
        borderColor: '#000',
        borderWidth: 2,
       
    },

    textoBotao5: {
        color: CORES.TEXTO_CLARO,
    },

    botao6: {
        backgroundColor: 'orange',
        justifyContent: 'center',
        height: 48,
        borderBottomLeftRadius: 48,
        borderTopRightRadius: 48,
        
       
    },

    textoBotao6: {
        color: CORES.TEXTO_PADRAO,
        padding: 16,
    },

    botao7: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderBottomLeftRadius: 48,
        borderTopRightRadius: 48,
        
       
    },

    textoBotao7: {
        color: CORES.TEXTO_CLARO,
    },

});

const TelaInicial = (props) => {

    return (

        <View style={styles.container}>

       
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:16}}>
                <Text style={{fontSize:32}}>Bem-vindo!</Text>
                {/* <MaterialIcons name='sentiment-very-satisfied' size={40} color='green' /> */}
                <FontAwesomeIcon icon={faFaceGrinStars} size={32} color="green" />
              
            </View>
       
            <Pressable style={styles.botao1} onPress={() => props.navigation.navigate(TELAS.TELA_CONSUMO_VEICULO)}>
                <Text style={styles.textoBotao1}>Média Consumo Veículo</Text>
            </Pressable>

            <Pressable style={styles.botao2} onPress={() => props.navigation.navigate(TELAS.TELA_CONVERSOR_MOEDA)}>
                <Text style={styles.textoBotao2}>Conversor de Moeda</Text>
            </Pressable>
            
            <Pressable style={styles.botao3} onPress={() => props.navigation.navigate(TELAS.TELA_CONVERSOR_MEDIDAS)}>
                <Text style={styles.textoBotao3}>Conversor de Medidas</Text>
            </Pressable>

            <Pressable style={styles.botao4} onPress={() => props.navigation.navigate(TELAS.TELA_MEDIA_NOTAS)}>
                <Text style={styles.textoBotao4}>Calcular Média de Notas</Text>
            </Pressable>

            <Pressable style={styles.botao5} onPress={() => props.navigation.navigate(TELAS.TELA_CALCULADORA)}>
                <Text style={styles.textoBotao5}>Calculadora</Text>
            </Pressable>

            <Pressable style={styles.botao6} onPress={() => props.navigation.navigate(TELAS.TELA_REAJUSTE_SALARIAL)}>
                <Text style={styles.textoBotao6}>Calcular Reajuste Salarial</Text>
            </Pressable>

            <Pressable style={styles.botao7} onPress={() => props.navigation.navigate(TELAS.TELA_CALCULO_IMC)}>
                <Text style={styles.textoBotao7}>Cálculo IMC</Text>
            </Pressable>

        </View>

    );

};

export default TelaInicial;