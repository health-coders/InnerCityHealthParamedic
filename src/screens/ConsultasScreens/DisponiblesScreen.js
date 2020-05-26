import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import TargetaConsulta from "../../components/targetaCosulta/TargetaConsulta";

const DisponiblesScreen = ({navigation}) => {

    const info = {
        tipo: 'General',
        fecha: '25/04/2021',
        hora: '18:00',
        direccion: 'Crra 85',
        estado: false,
        descripcion: 'Me siento mal',
        nombrePaciente: 'Luis Alvarez',
    }

    return (
        <>
            <Text style={styles.title}>Consultas </Text>
            <TargetaConsulta info={info} />
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 37,
        marginVertical: 20
    },
});

export default DisponiblesScreen;
