import React, {useState, useEffect} from 'react';
import {ScrollView, FlatList, StyleSheet} from 'react-native';
import TargetaConsulta from '../../components/targetaCosulta/TargetaConsulta';

const PendientesScreen = ({navigation}) => {

    const [info, guardarInfo] = useState([
        {
            tipo: 'General',
            nombrePaciente: 'asd Pérez',
            fecha: 'Hoy',
            hora: 'Ahora',
            estado: false,
            descripcion: 'Descripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loreDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita loremDescripción muy crack de la cita lorem',
            direccion: 'Cra 84 #33 AA-01',
        },
        {
            tipo: 'General',
            nombrePaciente: 'a Pérez',
            fecha: 'Hoy',
            hora: 'Ahora',
            estado: false,
            descripcion: 'Descripción muy crack de la cita',
            direccion: 'Cra 84 #33 AA-01',
        },
        {
            tipo: 'General',
            nombrePaciente: 'asdsd Pérez',
            fecha: 'Hoy',
            hora: 'Ahora',
            estado: false,
            descripcion: 'Descripción muy crack de la cita',
            direccion: 'Cra 84 #33 AA-01',
        },
        {
            tipo: 'General',
            nombrePaciente: 'Kevin asdfadsf',
            fecha: 'Hoy',
            hora: 'Ahora',
            estado: false,
            descripcion: 'Descripción muy crack de la cita',
            direccion: 'Cra 84 #33 AA-01',
        },
    ]);

    return (
            <FlatList
                style={styles.contenedor}
                data={info}
                keyExtractor={(item) => item.nombrePaciente}
                renderItem={(item) => (
                    <TargetaConsulta
                        info={item}
                        navigation={navigation}
                    />
                )}
            />
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        paddingTop: 10
    },
});

export default PendientesScreen;
