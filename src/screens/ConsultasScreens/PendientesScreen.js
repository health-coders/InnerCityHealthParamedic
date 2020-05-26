import React, {useState, useEffect} from 'react';
import {ScrollView, FlatList, StyleSheet} from 'react-native';
import TargetaConsulta from '../../components/targetaCosulta/TargetaConsulta';

const PendientesScreen = ({navigation}) => {

    const [consultas, guardarConsultas] = useState([{
        tipo: 'General',
        nombrePaciente: 'Kevin Pérez',
        fecha: 'Hoy',
        Hora: 'Ahora',
        estado: false,
        descripcion: 'Descripción muy crack de la cita',
        dirección: 'Cra 84 #33 AA-01',
    }]);

    useEffect(() => {
        guardarConsultas([...consultas, {
            tipo: 'General',
            nombrePaciente: 'Kevin Pérez',
            fecha: 'Hoy',
            Hora: 'Ahora',
            estado: false,
            descripcion: 'Descripción muy crack de la cita',
            dirección: 'Cra 84 #33 AA-01',
        },
            {
                tipo: 'General',
                nombrePaciente: 'Kevin Pérez',
                fecha: 'Hoy',
                Hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción muy crack de la cita',
                dirección: 'Cra 84 #33 AA-01',
            }, {
                tipo: 'General',
                nombrePaciente: 'Kevin Pérez',
                fecha: 'Hoy',
                Hora: 'Ahora',
                estado: false,
                descripcion: 'Descripción muy crack de la cita',
                dirección: 'Cra 84 #33 AA-01',
            }]);
    }, []);

    return (
        <ScrollView style={styles.contenedor}>
            <FlatList
                data={consultas}
                keyExtractor={(consulta) => consulta.nombre}
                renderItem={(consulta) => (
                    <TargetaConsulta
                        descripcion={consulta.descripcion}
                        tipo={consulta.tipo}
                        nombrePaciente={consulta.nombrePaciente}
                        direccion={consulta.direccion}
                        estado={consulta.estado}
                        fecha={consulta.fecha}
                        hora={consulta.hora}
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
