import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import TargetaConsulta from "../../components/targetaCosulta/TargetaConsulta";

const ConsultasDisponiblesScreen = ({navigation}) => {
    return (
        <>
            <Text style={styles.title}>Consultas </Text>
            <TargetaConsulta tipo='General' fecha= 'la que sea' hora='12:30' estado={false} />
        </>
    );
};

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize: 37,
        marginVertical: 20
    },
});

export default ConsultasDisponiblesScreen;
