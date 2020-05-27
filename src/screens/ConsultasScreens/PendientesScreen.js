import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import TarjetaConsulta from '../../components/tarjetaCosulta/TarjetaConsulta';
import {connect} from 'react-redux';

const PendientesScreen = ({navigation, citasPendientes}) => {

    return (
        <FlatList
            style={styles.contenedor}
            data={citasPendientes}
            keyExtractor={(cita) => cita.id}
            renderItem={(cita) => (
                <TarjetaConsulta
                    info={cita}
                    navigation={navigation}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        paddingTop: 10,
    },
});

const mapStateToProps = state => ({
    citasPendientes: state.citasPendientes
})

export default connect (mapStateToProps, null) (PendientesScreen);
