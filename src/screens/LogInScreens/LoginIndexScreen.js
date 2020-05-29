import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import GoogleAuthButton from '../../components/buttons/GoogleAuthButton';

const LoginIndexScreen = () => {

    return (
        <>
            <Text style={styles.title}>Registro</Text>
            <View style={styles.contenedorBotones}>
                <GoogleAuthButton/>

                <TouchableOpacity>
                    <Text style={styles.resgitroBtnText}>Registro Manual</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 37,
        marginVertical: 20,
        marginBottom: 10
    },
    resgitroBtnText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
    },
    registroBtn: {
        width: '70%',
        backgroundColor: '#e7e7e7',
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    contenedorBotones:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LoginIndexScreen;
