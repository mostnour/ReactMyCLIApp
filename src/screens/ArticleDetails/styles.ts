import { StyleSheet } from 'react-native';
import {fonts} from '../../utils/helpers/constants';

export default StyleSheet.create({
    safeContainer: {
        backgroundColor: '#fff',
        flex: 1,
    },
    container: {
        // backgroundColor: '#fff',
    },
    header: {
        // backgroundColor: 'gold',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    backBtn: {
        backgroundColor: 'gold',
        alignSelf: 'flex-start',
        padding: 10,
        borderRadius: 10,
    },
    goBackText: {
        color: '#333',
    },
    coverImg: {
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    dataCont: {
        paddingHorizontal: 16,
    },
    title: {
        // fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        fontFamily: fonts.CairoExtraBold ,
        // fontFamily: 'Cairo-light',
    },
    description: {
        fontFamily: fonts.Cairo,
    },
});
