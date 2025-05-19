import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/mainStack';
import ScreenNames from '../../navigation/ScreenNames';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
//import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';

export default function ArticleDetails() {

    const {goBack} = useNavigation();
    const {params} = useRoute <RouteProp<MainStackParamList, ScreenNames.ArticleDetails>>();
    const {article} = params ?? {};
    const {description, source, title, urlToImage} = article ?? {};

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={goBack}>
                        {/* <Text style={styles.goBackText}>Go Back</Text>
                        <Icon name="arrowleft" size={24} color="red" /> */}
                        <Icon name="chevron-thin-left" size={24} color="red" />
                    </TouchableOpacity>
                </View>
                <Image source={{uri: urlToImage}} style={styles.coverImg}/>
                <View style={styles.dataCont}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
