import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, TouchableOpacity, Alert} from 'react-native';
import {eliminarCitaPendiente} from '../../actions';
import {connect} from 'react-redux';

const CancelarConsultaScreen = ({navigation, route, onEliminarCitaPendiente}) => {

    const cita = route.params;

    const [motivoCancelacion, guardarMotivoCancelacion] = useState('');

    const cancelarCita = () => {

        Alert.alert('Cita cancelada', 'Su cita ha sido cancelada con éxito',['Ok']);

        onEliminarCitaPendiente(cita);

        setTimeout(() => {
            navigation.navigate('Pendientes');
        }, 1500);
    };

    return (

        <View tyle={styles.container}>
            <Text style={styles.titulo}>Motivo de cancelación</Text>
            <TextInput
                style={styles.inputMotivo}
                placeholder='Motivo de la cancelación de la cita...'
                placeholderTextColor='gray'
                onChangeText={(text)=>{
                    //Lo que se desea que se haga con el texto del cuadro
                    guardarMotivoCancelacion(text);
                    //console.log(motivoCancelacion); Este es el texto
                }}
            />
            <TouchableOpacity style={styles.btnCancelar} onPress={cancelarCita}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>Cancelar cita</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 10,
    }, btnCancelar: {
        backgroundColor: '#ff2d2d',
        width: '90%',
        borderRadius: 5,
        paddingVertical: 8,
        marginVertical: 20,
        alignItems: 'center',
        alignSelf: 'center',
    }, inputMotivo: {
        width: '90%',
        height: 100,
        backgroundColor: '#ffffff',
        borderColor: '#c6c6c6',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'center'
    },
});

const mapDispatchToProps = dispatch => ({
    onEliminarCitaPendiente: cita => dispatch(eliminarCitaPendiente(cita))
});

export default connect (null, mapDispatchToProps)(CancelarConsultaScreen);
