import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { ArticleType } from '../../types/ArticleType';
import { get } from '../../utils/helpers/apiService';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/mainStack';
import ScreenNames from '../../navigation/ScreenNames';

export default function TopNews() {

    const [articles, setArticles] = useState<ArticleType[]>([]);

    const {navigate} = useNavigation<NavigationProp<MainStackParamList, ScreenNames.HomeScreen>>();

    useEffect(() => {
        getTopNews();
    }, []);

    function getTopNews() {
        const url = '/everything?q=bitcoin';
        get(url).then(res => {
            console.log(res.data);
            //const articles = res.data?.articles;
            // filter the articles and get only that has an image.
            const articl = res.data?.articles?.filter((article: ArticleType) => article?.urlToImage !== null,);
            setArticles(articl);
            //return data
        }).catch((err) => {
            console.log('request Err: ', err);
        });
    }

    function gotoArticleDetails(article: ArticleType){
        navigate(ScreenNames.ArticleDetails, {
            article,
        });
    }

    function renderItem(item: ArticleType) {
        return (
            <TouchableOpacity style={styles.cardCont} onPress={() => gotoArticleDetails(item)}>
                <Image style={styles.cardAritcleImage} source={{uri: item.urlToImage}} />
                <Text style={styles.cardArticleName}>{item.title}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Top News</Text>

            {articles.length && (
                <View style={styles.listCont}>
                    <FlatList
                        data={articles}
                        renderItem={({item}) => renderItem(item)}
                        contentContainerStyle={styles.listCont}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                </View>
            )}
        </View>
    );
}
