import React, { useState, useLayoutEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Back from "../img/back.svg"; 

import { navigateTo, NavigateBack } from '../components/routesUtils';

const App = ({ navigation }) => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const colors = ['#00A724', '#00BCFF', '#FFA900', '#FF605B', '#B981FF'];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.mainpage}>
        <TouchableOpacity style={styles.backbtn} onPress={() => NavigateBack(navigation)}>
          <Back />
          <Text style={styles.text}>Главная</Text>
        </TouchableOpacity>
        <Text style={styles.center_text}>Новый список</Text>
      </View>

      <View style={styles.boxCreateList}>
        <View style={styles.box_row_list}>
          <Text style={styles.icon}>💻</Text>
          <View style={styles.boxinput}>
            <TextInput
              style={styles.input}
              placeholder="например, Мои продукты"
              placeholderTextColor="#C1C1C1"
              value={text}
              onChangeText={setText}
            />
          </View>
        </View>
        <View style={styles.boxrowcategories}>
          <View style={styles.oneCategory}><Text style={styles.oneCategoryText}>На базар</Text></View>
          <View style={styles.oneCategory}><Text style={styles.oneCategoryText}>Для дома</Text></View>
          <View style={styles.oneCategory}><Text style={styles.oneCategoryText}>На базар</Text></View>
          <View style={styles.oneCategory}><Text style={styles.oneCategoryText}>Для кухни</Text></View>
        </View>
        <View style={styles.boxtocolors}>
          <TextInput
              style={styles.input2}
              placeholder="Цвет списка"
              placeholderTextColor="#C1C1C1"
              value={text2}
              onChangeText={setText2}
          />
          {/* Тут пока картинки потом Сверстаю */}
          <View style={styles.colorcontainer}>
            {colors.map((color, index) => (
              <View key={index} style={[styles.circle, { backgroundColor: color }]} />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.create_button}>
        <Text style={styles.create_button_text}>Создать</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width:"100%",
  },
  backgroundStyle: {
    height: "100%",
    backgroundColor: "#23252F",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  mainpage: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    display: "flex",
    flexDirection: "row",
    gap:44,
  },
  text: {
    fontSize: 16,
    color: "#C1C1C1",
  },
  center_text: {
    color: "#FDFDFD",
    fontSize: 20,
    textAlign: "center",
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
  boxinput:{
    width: "83%",
  },
  input: {
    backgroundColor: "#1C1D26",
    width: "100%",
    height: 52,
    padding: 18,
    borderRadius: 14,
    paddingHorizontal: 10,
    color: "#FFFFFF",
  },
  boxCreateList: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    width: "100%",
    gap:4,
  },
  box_row_list: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
  },
  icon: {
    backgroundColor: "#1C1D26",
    padding: 18,
    borderRadius: 14,
  },
  backbtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  boxrowcategories:{
    width: "100%",
    flexDirection: "row",
    gap: 5,
    overflow:'scroll',
  },
  oneCategory:{
    backgroundColor:"#1C1D26",
    paddingHorizontal:12,
    paddingVertical:8,
    borderRadius: 8,
  },
  oneCategoryText:{
    color:"#FFFFFF",
    fontSize: 14,
    fontWeight:"400",
  },
  boxtocolors:{
    display: "flex",
    height: 88,
    padding: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 14,
    backgroundColor: "#1C1D26",
  },
  input2:{
    width: "100%",
    color: "#FFFFFF",
  },
  colorcontainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default App;