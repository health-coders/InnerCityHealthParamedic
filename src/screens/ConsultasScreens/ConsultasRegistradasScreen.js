import React from 'react';
import {StyleSheet, Text} from 'react-native';
import TarjetaConsulta from "../../components/tarjetaCosulta/TarjetaConsulta";

const ConsultasRegistradasScreen = () => {

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
            <TarjetaConsulta info={info}/>
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

export default ConsultasRegistradasScreen;
