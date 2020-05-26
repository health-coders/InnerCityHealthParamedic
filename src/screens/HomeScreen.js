import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <>
            <TouchableOpacity style={styles.btnPrincipal}>

                <Text style={styles.textoBtn}>Ver{'\n'}alertas</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPrincipal} onPress={()=>

                navigation.navigate('HomeConsultas')

            }>
                <Text style={styles.textoBtn}>Ver{'\n'}consultas</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    textoBtn: {
        fontWeight: 'bold',
        fontSize: 40
    },
    btnPrincipal: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        alignItems: 'center',
        margin: 20
    }
});

export default HomeScreen;
