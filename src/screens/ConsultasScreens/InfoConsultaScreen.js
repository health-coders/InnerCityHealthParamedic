import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const InfoConsultaScreen = ({route}) => {

    const info = route.params;

    const navigation = useNavigation();

    //TODO: Este componente dependerá del estado. Ajustar esta propiedad a los tres tipos de botones.
    const BotonesAcciones = () => {
        if (!info.estado) {
            return <TouchableOpacity style={styles.btnVolver}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>Iniciar viaje</Text>
            </TouchableOpacity>;
        }
        return null;

    };

    return (
        <>
            <ScrollView style={styles.container}>
                <Text style={styles.titulo}>
                    Consulta {info.tipo}
                </Text>

                <View>
                    <Text style={styles.texto}>
                        Paciente:
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>{info.nombrePaciente + '\n'}</Text>
                    </Text>

                    <Text style={styles.texto}>Descripción: {info.descripcion  + '\n'}</Text>
                    <Text style={styles.texto}>Fecha: {info.fecha}</Text>
                    <Text style={styles.texto}>Hora: {info.hora}</Text>
                    <Text style={styles.texto}>Dirección {info.direccion}</Text>

                </View>

                <View>
                    <TouchableOpacity style={styles.btnVolver} onPress={() => navigation.goBack()}>
                        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>Volver</Text>
                    </TouchableOpacity>
                    <BotonesAcciones/>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 10,
    },
    btnVolver: {
        backgroundColor: '#5a00ff',
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
