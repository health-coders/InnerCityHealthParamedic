import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {guardarCitasPendientes} from '../../actions';

const HomeConsultasScreen = ({navigation, onGuardarCitasPendientes}) => {

    useEffect(() => {
        onGuardarCitasPendientes([
            {
                id:'1',
                tipo: 'General',
                nombrePaciente: 'Hernan Pérez',
                fecha: 'Hoy',
                hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loreDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita lorem',
                direccion: 'Cra 84 #33 AA-01',
            },
            {
                id:'2',
                tipo: 'General',
                nombrePaciente: 'Luis Pérez',
                fecha: 'Hoy',
                hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción 1 muy crack de la cita',
                direccion: 'Cra 84 #33 AA-01',
            },
            {
                id:'3',
                tipo: 'General',
                nombrePaciente: 'Andrés Pérez',
                fecha: 'Hoy',
                hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción 2 muy crack de la cita',
                direccion: 'Cra 84 #33 AA-01',
            },
            {
                id:'4',
                tipo: 'General',
                nombrePaciente: 'Hermejilda Bedoya',
                fecha: 'Hoy',
                hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción 3 muy crack de la cita',
                direccion: 'Cra 84 #33 AA-01',
            },
        ]);
    }, []);

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
        alignContent: 'center',
    },
    btnPrincipal: {
        flex: 1,
        backgroundColor: '#eee',
        borderRadius: 5,
        alignItems: 'center',
        margin: 20,
    },
});

const mapDispatchToProps = dispatch => ({
    onGuardarCitasPendientes: citas => dispatch(guardarCitasPendientes(citas)),
});

export default connect(null, mapDispatchToProps)(HomeConsultasScreen);
