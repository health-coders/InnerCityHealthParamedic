import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const TargetaConsulta = ({tipo, nombrePaciente,fecha, hora, estado, descripcion,direccion}) => {

    const navigation = useNavigation();

    const propsInfoConsulta = {
        tipo: tipo,
        fecha: fecha,
        hora: hora,
        estado: estado,
        descripcion: descripcion,
        nombrePaciente:nombrePaciente,
        direccion:direccion
    };
    return (
        <>
            <View style={styles.targetaConsulta}>
                <View>
                    <Text style={styles.texto}>
                        Tipo: {tipo}
                    </Text>
                    <Text style={styles.texto}>
                        Fecha: {fecha}
                    </Text>
                    <Text style={styles.texto}>
                        Hora: {hora}
                    </Text>
                </View>
                <Text>CORREGIR COLORES Y NAVIGATION</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.texto}> Estado: </Text>

                    <View style={{color: estado ? '#24fd66' : '#ff2e2e', borderRadius: 8, borderColor: '#000'}}>
                        <Text style={{fontSize: 18}}> {estado ? 'Agendada' : 'En espera'}</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.botonMasInfo}
                        onPress={() => navigation.navigate('InfoConsulta', propsInfoConsulta)}
                    >
                        <Text>Más info.</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    targetaConsulta: {
        borderRadius: 7,
        backgroundColor: '#e8e8e8',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        width: '90%',
        padding: 20,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
    },
    botonMasInfo: {
        backgroundColor: '#792bff',
        borderRadius: 8,
        marginLeft: 30,
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center'
    }
});

export default TargetaConsulta;
