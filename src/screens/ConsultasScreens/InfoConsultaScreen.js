import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'


const InfoConsultaScreen = ({route}) => {

    const info = route.params;

    const navigation = useNavigation();
    return (
        <>
            <View style={styles.infoConsulta}>
                <Text style={styles.titulo}>
                    {info.tipo}
                </Text>

                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        Nombre: {info.nombrePaciente}
                    </Text>
                    <View>
                        <Text style={{fontWeight: 'bold'}}>Tipo: {info.tipo}</Text>
                        <Text style={{fontWeight: 'bold'}}>Descripción: {info.descripcion}</Text>
                    </View>
                </View>

                <View>
                    <Text>Fecha: {info.fecha}</Text>
                    <Text>Hora: {info.hora}</Text>
                    <Text>Dirección {info.direccion}</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 18}}> Estado: {info.estado ? 'Agendada' : 'En espera'}</Text>

                    <TouchableOpacity style={styles.btnVolver} onPress={() => navigation.goBack()}>
                        <Text style={{color: '#fff'}}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 10
    },
    btnVolver: {
        backgroundColor: '#792bff',
        borderRadius: 8,
        marginLeft: 30,
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    infoConsulta: {
        borderRadius: 7,
        backgroundColor: '#e8e8e8',
        marginTop:10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        width: '90%',
        padding: 20,
        marginHorizontal: 20,
        alignItems: 'center',
    }
});

export default InfoConsultaScreen;
