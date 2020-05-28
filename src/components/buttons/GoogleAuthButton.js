import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

export default class GoogleAuthButton extends React.Component {

    componentDidMount() {
        GoogleSignin.configure();
    }

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
            console.log(error);
        }
    };

    render() {
        return (
            <TouchableOpacity
                style={styles.googleBtn}
                onPress={this.signIn}
            >
                <Image
                    style={styles.googleLogo}
                    source={require('../../../assets/images/googleLogo.png')}
                />
                <Text style={styles.googleBtnText}>Registro con Google</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    googleBtn: {
        width: '70%',
        backgroundColor: '#ff6613',
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
        flexDirection: 'row',
    },
    googleBtnText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
    },
    googleLogo: {
        height: 40,
        width: 40,
        marginRight: 10
    },
});
