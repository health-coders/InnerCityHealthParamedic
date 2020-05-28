import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import TarjetaConsulta from "../../components/tarjetaCosulta/TarjetaConsulta";
import {connect} from 'react-redux';

const DisponiblesScreen = ({navigation, citasDisponibles}) => {

    return (
        <>
            <FlatList
                style={styles.contenedor}
                data={citasDisponibles}
                keyExtractor={(cita) => cita.id}
                renderItem={(cita) => (
                    <TarjetaConsulta
                        info={cita}
                        navigation={navigation}
                    />
                )}
            />
        </>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        paddingTop: 10,
    },
});

const mapStateToProps = state => ({
    citasDisponibles: state.citasDisponibles
})
export default connect (mapStateToProps, null) (DisponiblesScreen);
