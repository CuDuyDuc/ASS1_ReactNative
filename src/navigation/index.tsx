import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SCREENS from "../screens";
import IntroScreen from "../screens/intro/IntroScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import HomePageScreen from "../screens/tabs/HomePageScreen";
import { Image } from "react-native";
import IMAGES from "../assets/Images";
import CartScreen from "../screens/tabs/CartScreen";
import FavoritesScreen from "../screens/tabs/FavoritesScreen";
import OrderHistoryScreen from "../screens/tabs/OrderHistoryScreen";
import COLORS from "../assets/Colors";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
    return <Stack.Navigator
        initialRouteName = {SCREENS.INTRO}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name={SCREENS.INTRO}
            component={IntroScreen}
            options={{ headerShown: false }}/>
        <Stack.Screen
            name={SCREENS.LOGIN}
            component={LoginScreen} 
            options={{ headerShown: false }}/>
        <Stack.Screen
            name ={SCREENS.REGISTER}
            component={RegisterScreen}
            options={{ headerShown: false}}/>  
        <Stack.Screen
            name={SCREENS.HOMEPAGE}
            component={TabNavigator}
            options={{ headerShown: false }} />      

    </Stack.Navigator>
}

const TabNavigator= () => {
    return <Tab.Navigator initialRouteName = {SCREENS.HOMEPAGE} screenOptions={{headerShown: false}}>
        <Tab.Screen
            name = {SCREENS.HOMEPAGE}
            component={HomePageScreen}
            options={{
                title : 'Trang Chủ',
                tabBarIcon: ({focused}) => (<Image source={IMAGES.Home} 
                    style={{ tintColor: focused ? COLORS.HEX_ORANGE : COLORS.HEX_LIGHT_GREY }} />),
                tabBarActiveTintColor: COLORS.HEX_ORANGE,
                tabBarInactiveTintColor: COLORS.HEX_LIGHT_GREY  
            }}/>
        <Tab.Screen
            name = {SCREENS.CART}
            component={CartScreen}
            options={{
                title : 'Giỏ Hàng',
                tabBarIcon: ({focused}) => (<Image source={IMAGES.Cart} 
                    style={{ tintColor: focused ? COLORS.HEX_ORANGE : COLORS.HEX_LIGHT_GREY  }} />),
                tabBarActiveTintColor: COLORS.HEX_ORANGE,
                tabBarInactiveTintColor: COLORS.HEX_LIGHT_GREY   
            }}/>
        <Tab.Screen
            name = {SCREENS.FAVOURITE}
            component={FavoritesScreen}
            options={{
                title : 'Yêu Thích',
                tabBarIcon: ({focused}) => (<Image source={IMAGES.Favorites} 
                    style={{ tintColor: focused ? COLORS.HEX_ORANGE : COLORS.HEX_LIGHT_GREY  }} />),
                tabBarActiveTintColor: COLORS.HEX_ORANGE,
                tabBarInactiveTintColor: COLORS.HEX_LIGHT_GREY   
            }}/>
        <Tab.Screen
            name = {SCREENS.ORDER_HISTORY}
            component={OrderHistoryScreen}
            options={{
                title : 'Lịch Sử',
                tabBarIcon: ({focused}) => (<Image source={IMAGES.OderHistory} 
                    style={{ tintColor: focused ? COLORS.HEX_ORANGE : COLORS.HEX_LIGHT_GREY  }} />),
                tabBarActiveTintColor: COLORS.HEX_ORANGE,
                tabBarInactiveTintColor: COLORS.HEX_LIGHT_GREY 
            }}/>
    </Tab.Navigator>
}

export default StackNavigation;