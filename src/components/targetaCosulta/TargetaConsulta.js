import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const TargetaConsulta = ({info}) => {

    const navigation = useNavigation();

    console.log(info)

    return (
        <>
            <View style={styles.targetaConsulta}>
                <View>
                    <Text style={styles.texto}>
                        Tipo: {info.tipo}
                    </Text>
                    <Text style={styles.texto}>
                        Fecha: {info.fecha}
                    </Text>
                    <Text style={styles.texto}>
                        Hora: {info.hora}
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.texto}> Estado: </Text>

                    <View style={{borderRadius: 8, borderColor: '#000'}}>
                        <Text style={{
                            fontSize: 18,
                            color: info.estado ? '#24fd66' : '#ff2e2e'
                        }}> {info.estado ? 'Agendada' : 'En espera'}</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.botonMasInfo}
                        onPress={() => navigation.navigate('InfoConsulta', info)}
                    >
                        <Text style={{color: '#fff'}}>Más info.</Text>

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
