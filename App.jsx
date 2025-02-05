import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {View, Platform} from 'react-native';

// Импорт экранов
import HomePage from './src/screens/HomePage';
import CreateList from './src/screens/CreateList';
import SamplePage from './src/screens/SamplePage';
import ShopsPage from './src/screens/ShopsPage';
import SettingsPage from './src/screens/SettingsPage';
import CreateShop from './src/screens/CreateShop';

// Импорт SVG-иконок
import Home from './src/img/home.svg';
import HomeActive from './src/img/homeActive.svg';
import Sample from './src/img/sample.svg';
import SampleActive from './src/img/sampleActive.svg';
import Shop from './src/img/shop.svg';
import ShopActive from './src/img/shopActive.svg';
import Settings from './src/img/settings.svg';
import SettingsActive from './src/img/settingsActive.svg';

// Создание навигаторов
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Функция для отображения вкладок
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let Icon;
          // = focused ? HomeActive : Home
          if (route.name === 'Home') {
            Icon = focused ? HomeActive : Home;
          } else if (route.name === 'Sample') {
            Icon = focused ? SampleActive : Sample;
          } else if (route.name === 'Shops') {
            Icon = focused ? ShopActive : Shop;
          } else if (route.name === 'Settings') {
            Icon = focused ? SettingsActive : Settings;
          }
          return (
            <View style={{marginTop:14}}>
              <Icon width={size} height={size} fill={color} />
            </View>
          );
        },
        tabBarStyle: {
          width: '100%',
          height: Platform.OS === 'ios' ? 90 : 75,
          backgroundColor: '#14151B',
          borderTopLeftRadius: 34,
          borderTopRightRadius: 34,
          paddingVertical: 14,
          paddingHorizontal: 26,
          position: 'absolute',
          borderColor: '#14151B',
        },
        tabBarActiveTintColor: '#7C55FB',
        tabBarInactiveTintColor: '#76899B',
        tabBarLabelStyle:{
          marginTop:14,
          fontSize:10,
          fontWeight:400
        },
      })}>
      <Tab.Screen name="Home"component={HomePage}options={{title: 'Главная'}}/>
      <Tab.Screen name="Sample"component={SamplePage}options={{title: 'Шаблоны'}}/>
      <Tab.Screen name="Shops"component={ShopsPage}options={{title: 'Магазины'}}/>
      <Tab.Screen name="Settings"component={SettingsPage}options={{title: 'Настройки'}}/>
    </Tab.Navigator>
  );
}

// Главный компонент приложения
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="CreateList" component={CreateList} options={{title: 'Create List'}}/>
        <Stack.Screen name="CreateShop" component={CreateShop} options={{title:'Create Shop'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
