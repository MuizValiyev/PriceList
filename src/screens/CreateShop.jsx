import React, {useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Back from '../img/back.svg';
import {NavigateTo, NavigateBack} from '../components/routesUtils';
import AddShop from '../img/addlist.svg';
import CreateShop from '../img/createshop.svg';

const ShopsCreatePage = ({navigation}) => {
  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar backgroundColor="#23252F" />
      <View style={styles.mainpage}>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => NavigateBack(navigation)}>
          <Back />
          <Text style={styles.text}>Главная</Text>
        </TouchableOpacity>
        <Text style={styles.center_text}>Создать магазин</Text>
      </View>
      <View style={styles.box_row_list}>
        <View style={styles.boxinput}>
          <CreateShop />
          <TextInput
            style={styles.input}
            placeholder="Название нового магазина"
            placeholderTextColor="#C1C1C1"
            value={input}
            onChangeText={setInput}
          />
        </View>
      </View>
      <View style={styles.create_button}>
        <Text style={styles.create_button_text}>Создать</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: '100%',
    backgroundColor: '#23252F',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backgroundStyle: {
    height: '100%',
    backgroundColor: '#23252F',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  mainpage: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    display: 'flex',
    flexDirection: 'row',
    gap: 44,
  },
  backbtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#C1C1C1',
  },
  center_text: {
    color: '#FDFDFD',
    fontSize: 20,
    textAlign: 'center',
  },
  boxinput: {
    backgroundColor: '#1C1D26',
    width: '100%',
    height: 52,
    padding: 18,
    borderRadius: 14,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  input: {
    width: '90%',
    color: '#fff',
  },
  box_row_list: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  create_button: {
    height: 50,
    width: "90%",
    backgroundColor: "#8364FF",
    borderRadius: 34,
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  create_button_text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 14,
  },
});

export default ShopsCreatePage;
