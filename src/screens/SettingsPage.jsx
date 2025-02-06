import React, { useLayoutEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Settings_account from '../img/settings_account.svg';
import Settings_arrow from '../img/settings_arrow.svg';
import Settings_arrow2 from '../img/settings_arrow2.svg';
import Settings_category from '../img/settings_category.svg';
import Settings_global from '../img/settings_global.svg';
import Settings_letter from '../img/settings_letter.svg';
import Settings_login from '../img/settings_login.svg';
import Settings_money from '../img/settings_money.svg';
import Settings_plus from '../img/settings_plus.svg';
import Settings_sun from '../img/settings_sun.svg';

import { NavigateTo } from '../components/routesUtils';


const App = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [popup, setPopup] = useState(false);

  const HandlePopup = () => {
    setPopup(!popup);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#23252F" />
      <View style={styles.mainContent}>
        <Text style={styles.header}>Настройки</Text>
      </View>
      <View style={styles.SettingsContainer}>
        <View style={styles.part1}>

          <View style={styles.user}>
            <View style={styles.Icon_name}>
              <Settings_account />
              <Text style={styles.text_left}>Учетная запись</Text>
            </View>
            <View style={styles.arrow}>
              <Text style={styles.text_right}>Арслан Батонов</Text>
              <Settings_arrow2 />
            </View>
          </View>

        </View>

        <View style={styles.part2}>
          <View style={styles.user}>
            <View style={styles.Icon_name}>
              <Settings_category />
              <Text style={styles.text_left}>Категории</Text>
            </View>
            <View style={styles.arrow}>
               <Text style={styles.text_right}>Добавить</Text>
              <Settings_arrow2 />
            </View>
          </View>

          <View style={styles.user}>
            <View style={styles.Icon_name}>
              <Settings_money />
              <Text style={styles.text_left}>Выберите валюту</Text>
            </View>
            <TouchableOpacity onPress={HandlePopup} style={styles.Sum}>
               <Text style={styles.text_right}>UZS</Text>
              <Settings_arrow />
            </TouchableOpacity>
            {popup ? (
            <View style={styles.popup}></View>
          ) : (<></>)}
          </View>

          <View style={styles.user}>
            <View style={styles.Icon_name}>
              <Settings_login />
              <Text style={styles.text_left}>Присоединиться к списку</Text>
            </View>
            <View style={styles.arrow}>
              <Settings_arrow2 />
            </View>
          </View>
        
          <TouchableOpacity onPress={() => NavigateTo(navigation, 'createShop')} style={styles.addlistmini}>
          <View style={styles.user}>
            <View style={styles.Icon_name}>
              <Settings_plus />
              <Text style={styles.text_left}>Создать магазин</Text>
            </View>
            <View style={styles.arrow}>
              <Settings_arrow2 />
            </View>
          </View>
          </TouchableOpacity>

          <View style={styles.user}>
            <View style={styles.Icon_name}>
              <Settings_sun />
              <Text style={styles.text_left}>Тема</Text>
            </View>
            <View style={styles.arrow}>
               <Text style={styles.text_right}>Темная</Text>
              <Settings_arrow2 />
            </View>
          </View>
        </View>
        <View style={styles.part3}>
        <View style={styles.user}>
            <View style={styles.Icon_name}>
              <Settings_global />
              <Text style={styles.text_left}>Язык</Text>
            </View>
            <View style={styles.arrow}>
              <Settings_arrow2 />
            </View>
          </View>

          <View style={styles.user}>
            <View style={styles.Icon_name}>
              <Settings_letter />
              <Text style={styles.text_left}>Поддержка и обратная связь</Text>
            </View>
            <View style={styles.arrow}>
              <Settings_arrow2 /> 
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#23252F',
    alignItems: 'center',
    paddingBottom: 16,
  },
  mainContent: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 24,
    display:'flex',
    alignItems:'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FDFDFD',
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
    color: '#76899B',
  },
  listContainer: {
    alignItems: 'center',
    gap:12,
  },
  SettingsContainer:{
    display:'flex',
    flexDirection:'column',
    gap:'12',
  },
  part1:{
    display:'flex',
    flexDirection:'column',
    padding:8,
    backgroundColor:'#2C2D3D',
    borderRadius:14,
  },
  user:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:12,
    gap:10,
  },
  Icon_name:{
    display:'flex',
    flexDirection:'row',
    gap:10,

  },
  arrow:{
    display:'flex',
    flexDirection:'row',
    gap:10,
  },
  Sum:{
    display:'flex',
    flexDirection:'row',
    gap:5,
    padding:4,
    paddingInline:9,
    borderRadius:12,
    backgroundColor:'#1C1D26',
  },
  text_left:{
    color:'#FFFFFF',
    fontSize:16,
    fontWeight:'600',
    letterSpacing:0.32,
  },
  text_right:{
    color:'#76899B',
  },
  part2:{
    display:'flex',
    flexDirection:'column',
    width:370,
    padding:12,
    backgroundColor:'#2C2D3D',
    borderRadius:14,
  },
  part3:{
    display:'flex',
    flexDirection:'column',
    padding:12,
    backgroundColor:'#2C2D3D',
    borderRadius:14,
  },
  popup:{
    backgroundColor:'#14151B',
    width:100,
    height:100,
    position:'absolute',
    zIndex:1000,
  }
});

export default App;