import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const HomeConsultasScreen = ({navigation}) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => navigation.navigate('Disponibles')}
                style={styles.btnPrincipal}>
                <Text
                    style={styles.textoBtn}
                >
                    CONSULTAS DISPONIBLES
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnPrincipal}
                              onPress={() => navigation.navigate('Pendientes')}
            >
                <Text style={styles.textoBtn}> CONSULTAS PENDIENTES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnPrincipal}>
                <Text style={styles.textoBtn}>REGISTRO CONSULTAS </Text>
            </TouchableOpacity>


        </>
    );
};

const styles = StyleSheet.create({
    textoBtn: {
        fontWeight: 'bold',
        fontSize: 40,
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center'
    },
    btnPrincipal: {
        flex: 1,
        backgroundColor: '#eee',
        borderRadius: 5,
        alignItems: 'center',
        margin: 20
    }
});

export default HomeConsultasScreen;
