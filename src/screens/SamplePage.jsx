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

import AddSampleButton from '../img/addSampleButton.svg';
import AddSample from '../img/addlist.svg';

import {NavigateTo, NavigateBack} from '../components/routesUtils';

const App = ({navigation}) => {
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
        <Text style={styles.header}>Список шаблонов</Text>
      </View>

      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AddSampleButton />
        </TouchableOpacity>
        <Text style={styles.header}>Шаблоны еще не созданы.</Text>
        <Text style={styles.subText}>
          Чтобы создать новый шаблон – {'\n'} нажмите на +
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.addlistmini}>
        <AddSample />
      </TouchableOpacity>



      <Modal
        style={{ position:'absolute', zIndex:1000 }}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.inputh1}>
            <Text style={styles.modalh1}>Это модальное окно</Text>
            <TextInput style={styles.input} placeholder='Название шаблона' value={input} onChangeText={setInput}/>
            </View>
            <View style={styles.createAndCloserow}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.createsample}>
                <Text style={styles.texth6}>Создать</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closecreatesample}>
                <Text style={styles.texth5}>Закрыть</Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>
      </Modal>
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
    height:402,
    paddingVertical:24, 
    paddingHorizontal:16,
    display:'flex',
    justifyContent:'space-between',
  },
  modalh1:{
    color:"#FDFDFD",
    fontWeight:600,
    fontSize:24,
  },
  inputh1:{
    gap:22,
    display:'flex',
    alignItems:'center',
  },
  input:{
    width:'100%',
    height:52,
    paddingVertical:18,
    paddingHorizontal:14,
    gap:10,
    backgroundColor:'#1C1D26',
    borderRadius:14,
    color:'#fff',
  },
  createAndCloserow:{
    display:'flex',
    flexDirection:'row',
    gap:14,
  },
  createsample:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'48%',
    height:50,
    paddingVertical:14,
    paddingHorizontal:20,
    borderRadius:999,
    backgroundColor:'#8364FF',
  },
  closecreatesample:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'48%',
    height:50,
    paddingVertical:14,
    paddingHorizontal:20,
    borderRadius:999,
    backgroundColor:'#23252F',
    borderWidth:1,
    borderColor:'#8364FF',
  },
  texth6:{
    color:'#fff',
    fontSize:14,
    fontWeight:400,
  },
  texth5:{
    color:'#8364FF',
    fontSize:14,
    fontWeight:400,
  },
});

export default App;
