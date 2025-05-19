import React from 'react';
import {
    ScrollView,
    //View,
    //Text,
    //TouchableOpacity,
    //Alert,
} from 'react-native';
import Header  from '../../components/Header/Header';
import MainNews from '../../components/MainNews/MainNews';
import TopNews from '../../components/TopNews/TopNews';
import { SafeAreaView } from 'react-native-safe-area-context';

//import styles from './styles';

const HomeScreen = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <MainNews />
                <TopNews />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
