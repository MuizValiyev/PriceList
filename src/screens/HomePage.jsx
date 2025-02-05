import React, {useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

import AddListButton from '../img/addListButton.svg';
import AddList from '../img/addlist.svg';
import CreateList from '../img/createlist.svg';
import ChoopseSample from '../img/choosesample.svg';
import DontHaveSample from '../img/donthavesample.svg';


import { NavigateTo } from '../components/routesUtils';

const App = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);


  const [modalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#23252F" />
      <View style={styles.mainContent}>
        <Text style={styles.header}>Главная страница</Text>
      </View>

      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AddListButton/>
        </TouchableOpacity>
        <Text style={styles.header}>Списки еще не созданы.</Text>
        <Text style={styles.subText}>
          Чтобы создать новый список – {'\n'} нажмите на +
        </Text>
      </View>

      <Modal
        style={{ position:'absolute', zIndex:1000 }}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.inputh1}>
              <Text style={{opacity:0}}>Отмена</Text>
            <Text style={styles.modalh1}>Новый список</Text>
            <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closecreatesample}>
                <Text style={styles.texth5}>Отмена</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.createAndCloserow}>
              <TouchableOpacity onPress={() => {NavigateTo(navigation, 'createList'); setModalVisible(false)}} style={styles.createlistbtn}><CreateList/><Text style={styles.textcreatelist}>Создать список</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate('Sample'); setModalVisible(false)}} style={styles.choosesample}><ChoopseSample/><Text style={styles.textcreatelist}>Выбрать шаблон</Text></TouchableOpacity>
          </View>
          <View style={styles.donthavesamples}>
            <DontHaveSample />
            <Text style={styles.donthavesamplestext}>У вас пока нет часто используемых {'\n'} шаблонов</Text>
          </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.addlistmini}>
        <AddList />
      </TouchableOpacity>

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
    paddingVertical: 24,
    paddingHorizontal: 16,
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
    height: '75%',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'center',
  },
  addlistmini: {
    position: 'absolute',
    right: 15,
    bottom: 113,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer:{
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    backgroundColor:"#23252F",
    width:'100%',
    height:485,
    paddingVertical:24, 
    paddingHorizontal:16,
    display:'flex',
    justifyContent:'flex-start',
    gap:35,
  },
  inputh1:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    width:'100%'
  },
  modalh1:{
    fontSize:20,
    color:'#FDFDFD',
    fontWeight:600,
  },
  texth5:{
    color:'#C1C1C1',
    textAlign:'center',
    fontSize:16,
    fontWeight:400,
    marginTop:4,
  },
  createAndCloserow:{
    gap:10, 
    display:'flex',
    flexDirection:'column'
  },
  createlistbtn:{
    width:'100%',
    height:74,
    backgroundColor:'#1C1D26',
    gap:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:14,
    flexDirection:'row',
  },
  textcreatelist:{
    color:'#fff',
    fontSize:16,
    fontWeight:400,
  },
  choosesample:{
    width:'100%',
    height:74,
    backgroundColor:'#1C1D26',
    gap:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:14,
    flexDirection:'row',
  },
  donthavesamples:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:20,
  },
  donthavesamplestext:{
    color:'#fff',
    fontSize:16,
    fontWeight:400,
    textAlign:'center',
  },
});

export default App;