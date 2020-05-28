import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import GoogleAuthButton from '../../components/buttons/GoogleAuthButton';

export default class LoginIndexScreen extends React.Component {

    render() {
        return (
            <GoogleAuthButton />
        );
    }
}

const styles = StyleSheet.create({});
