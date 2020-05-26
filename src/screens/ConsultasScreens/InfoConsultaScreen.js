import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const InfoConsultaScreen = () => {
    return (
        <>
            <Text style={styles.titulo}>
                {tipo}
            </Text>

            <View>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    Nombre: {nombrePaciente}
                </Text>
                <Text>Tipo: {tipo}</Text>
                <Text style={{borderBottomColor: '#000'}}> </Text>
                <Text>Descripción: {descripcion}</Text>
            </View>

            <View>
                <Text>Fecha: {fecha}</Text>
                <Text>Hora: {hora}</Text>
                <Text>Dirección {direccion}</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18}}> Estado: {estado ? 'Agendada' : 'En espera'}</Text>

                <TouchableOpacity style={styles.btnVolver} onPress={()=> navigation.goBack()}>
                    <Text style={{color:'#fff'}}>Volver</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    btnVolver: {
        backgroundColor: '#792bff',
        borderRadius: 8,
        marginLeft: 30,
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center'
    }
});

export default InfoConsultaScreen;
