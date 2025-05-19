import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Header() {
    return (
        <View style={styles.container}>
            {/* <Image source={{
                uri: 'https://images.skynewsarabia.com/images/v1/2021/11/09/1477580/1200/675/1-1477580.jpg'
            }}
            width={200}
            height={200}
            /> */}
            <Image
                style={styles.img}
                source={require('../../assets/images/boy.png')}
            />
            <Text style={styles.title}>MK News</Text>
            <Image
                style={styles.img}
                source={require('../../assets/images/note.png')}
            />
        </View>
    );
}
/*  not prefect here, move it to styles.ts file
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    img: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
}); */
