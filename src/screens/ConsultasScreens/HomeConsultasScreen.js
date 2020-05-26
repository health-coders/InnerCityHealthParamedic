import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const HomeConsultasScreen = ({navigation}) => {
    return (
        <>
            <TouchableOpacity style={styles.btnPrincipal}>
                <Text
                    style={styles.textoBtn}
                    onPress={() => navigation.navigate('Disponibles')}
                >
                    CONSULTAS DISPONIBLES
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnPrincipal}>
                <Text style={styles.textoBtn}> CONSULTAS PENDIENTES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnPrincipal}>
                <Text style={styles.textoBtn}> CONSULTAS REGISTRO</Text>
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
