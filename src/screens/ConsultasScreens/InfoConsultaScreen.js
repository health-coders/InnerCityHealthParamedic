import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';

const InfoConsultaScreen = ({navigation, route}) => {

    const cita = route.params;

    const cancelarCita = () => {

        Alert.alert('No puede cancelar', 'Recuerde que para hacer la cancelación' +
            'debe hacerlo con, al menos, dos días de anticipación',
            ['Ok']);

        setTimeout(() => {
            navigation.navigate('CancelarConsulta', cita);
        }, 1500);
    };

    //TODO: Este componente dependerá del estado. Ajustar esta propiedad a los tres tipos de botones.
    const BotonesAcciones = () => {
        if (!cita.estado) {
            return <View>
                <TouchableOpacity style={styles.btnViaje}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>Iniciar viaje</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCancelar} onPress={cancelarCita}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>Cancelar cita</Text>
                </TouchableOpacity>
            </View>;
        }
        return null;

    };

    return (
        <>
            <ScrollView style={styles.container}>
                <Text style={styles.titulo}>
                    Consulta {cita.tipo}
                </Text>

                <View>
                    <Text style={styles.texto}>
                        Paciente:
                        <Text style={{fontWeight: 'bold', fontSize: 20}}> {cita.nombrePaciente + '\n'}</Text>
                    </Text>

                    <Text style={styles.texto}>Descripción: {cita.descripcion + '\n'}</Text>
                    <Text style={styles.texto}>Fecha: {cita.fecha}</Text>
                    <Text style={styles.texto}>Hora: {cita.hora}</Text>
                    <Text style={styles.texto}>Dirección {cita.direccion}</Text>
                    <BotonesAcciones/>
                </View>
            </ScrollView>
        </>
    )
        ;
};

const styles = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 10,
    },
    btnViaje: {
        backgroundColor: '#5a00ff',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginVertical: 20,
        alignSelf: 'flex-start',
    },
    btnCancelar: {
        backgroundColor: '#ff2d2d',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginVertical: 20,
        alignSelf: 'flex-start',
    },
    container: {
        padding: 10,
        marginHorizontal: 20,
    },
    texto: {
        fontSize: 20,
    },
});

export default InfoConsultaScreen;
