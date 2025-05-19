import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../navigation/ScreenNames';
import StackNames from '../../navigation/StackNames';

export default function LoginScreen() {

    const {navigate} = useNavigation();
    return (
        <TouchableOpacity style={styles.container}
        onPress={() => navigate(StackNames.MainTabs)}
        >
            {/* <View style={styles.container} > */}
                <Text style={styles.mainText}>
                Go to Home Tabs
                </Text>
            {/* </View> */}
        </TouchableOpacity>
    );
}
