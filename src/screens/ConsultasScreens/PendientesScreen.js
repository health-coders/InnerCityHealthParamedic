import React, {useState, useEffect} from 'react';
import {ScrollView, FlatList, StyleSheet} from 'react-native';
import TargetaConsulta from '../../components/targetaCosulta/TargetaConsulta';

const PendientesScreen = ({navigation}) => {

    const [info, guardarInfo] = useState([{
        tipo: 'General',
        nombrePaciente: 'Kevin Pérez',
        fecha: 'Hoy',
        Hora: 'Ahora',
        estado: false,
        descripcion: 'Descripción muy crack de la cita',
        direccion: 'Cra 84 #33 AA-01',
    }]);

    useEffect(() => {
        guardarInfo([...info, {
            tipo: 'General',
            nombrePaciente: 'Kevin Pérez',
            fecha: 'Hoy',
            Hora: 'Ahora',
            estado: false,
            descripcion: 'Descripción muy crack de la cita',
            direccion: 'Cra 84 #33 AA-01',
        },
            {
                tipo: 'General',
                nombrePaciente: 'Kevin Pérez',
                fecha: 'Hoy',
                Hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción muy crack de la cita',
                direccion: 'Cra 84 #33 AA-01',
            }, {
                tipo: 'General',
                nombrePaciente: 'Kevin Pérez',
                fecha: 'Hoy',
                Hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción muy crack de la cita',
                direccion: 'Cra 84 #33 AA-01',
            }]);
    }, []);

    return (
        <ScrollView style={styles.contenedor}>
            <FlatList
                data={info}
                keyExtractor={(info) => info.nombrePaciente}
                renderItem={(info) => (
                    <TargetaConsulta
                        descripcion={info.descripcion}
                        tipo={info.tipo}
                        nombrePaciente={info.nombrePaciente}
                        direccion={info.direccion}
                        estado={info.estado}
                        fecha={info.fecha}
                        hora={info.hora}
                        navigation={navigation}
                    />
                )}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
});

export default PendientesScreen;
