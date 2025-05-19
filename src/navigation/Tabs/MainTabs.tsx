import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import FavArticlesScreen from '../../screens/FavArticles/FavArticles.screen';
import ScreenNames from '../ScreenNames';
// import Ionicons from '@react-native-vector-icons/ionicons';
// import Icon from '@react-native-vector-icons/fontawesome';

const MyTabs = createBottomTabNavigator();

export default function MainTabs() {
    return (
    <MyTabs.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <MyTabs.Screen
            name={ScreenNames.HomeScreen}
            component={HomeScreen}
            options={
                {
                    tabBarLabel: 'Home',
                    // tabBarIcon: () => <Ionicons name="home" size={20} color={'red'} />,
                    // tabBarIcon: () => <Icon name="home" size={20} color={'red'} />,
                }
            }
        />
        {/* <MyTabs.Screen name={ScreenNames.} component={TopNews} /> */}
        <MyTabs.Screen
            name={ScreenNames.FavArticlesScreen}
            component={FavArticlesScreen}
            options={
                {
                    tabBarLabel: 'Favorites',
                }
            }
        />
    </MyTabs.Navigator>
    );
}
