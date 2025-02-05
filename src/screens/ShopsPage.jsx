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

import {NavigateTo, NavigateBack} from '../components/routesUtils';
import AddShop from '../img/addlist.svg';
import ShopAdd from '../img/shopadd.svg';
import Populary from '../img/populary.svg';
import Recent from '../img/recent.svg';

const ShopsPage = ({navigation}) => {
  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [populary, setPopulary] = useState(true);
  const [recent, setRecent] = useState(false);
  
  const handlepopulary = () => {
    setPopulary(true);
    setRecent(false);
  };
  
  const handlerecent = () => {
    setRecent(true);
    setPopulary(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#23252F" />
      <View style={styles.mainContent}>
        <Text style={styles.header}>Магазины</Text>
      </View>

      <View style={styles.ShopContainer}>
        <View style={styles.boxinput}>
          <ShopAdd />
          <TextInput
            style={styles.input}
            placeholder="Выберите магазин"
            placeholderTextColor="#C1C1C1"
            value={input}
            onChangeText={setInput}
          />
        </View>
        <View style={styles.populayandrecent}>
          <TouchableOpacity onPress={handlepopulary} style={populary ? styles.popularyactive : styles.populary}>
          <Populary />
            <Text style={styles.textpopulary}>Популярные</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlerecent} style={recent ? styles.popularyactive : styles.populary}>
          <Recent />
            <Text style={styles.textpopulary}>Недавние</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.popularyShop}>
          <Text style={styles.popularytext}>Популярные магазины</Text>
          <View style={styles.popularyShopRow}>
          <View style={styles.onePopularyShop}><Text style={styles.onePopularyShopText}>Makro</Text></View>
          <View style={styles.onePopularyShop}><Text style={styles.onePopularyShopText}>Makro</Text></View>
          <View style={styles.onePopularyShop}><Text style={styles.onePopularyShopText}>Makro</Text></View>
          <View style={styles.onePopularyShop}><Text style={styles.onePopularyShopText}>Makro</Text></View>
          <View style={styles.onePopularyShop}><Text style={styles.onePopularyShopText}>Makro</Text></View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => NavigateTo(navigation, 'createShop')}
        style={styles.addlistmini}>
        <AddShop />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#23252F',
    alignItems: 'center',
    justifyContent: 'start',
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
    alignItems: 'center',
    gap: 12,
  },
  bottomNavigation: {
    width: '100%',
    height: 150,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 30,
  },
  addButtonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    right: 15,
  },
  addButton: {
    width: 52,
    height: 52,
    backgroundColor: '#7C55FB',
    borderRadius: 999,
  },
  boxbottomnavigation: {
    width: '100%',
    height: '100%',
    backgroundColor: '#14151B',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    paddingHorizontal: 26,
    paddingVertical: 20,
  },
  navigationbtnsrow: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navtext: {
    color: '#76899B',
    fontSize: 10,
    fontWeight: '400',
  },
  navtextactive: {
    color: '#7C55FB',
    fontSize: 10,
    fontWeight: '400',
  },
  onebtnnav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  addlistmini: {
    position: 'absolute',
    right: 15,
    bottom: 113,
  },
  ShopContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    paddingHorizontal: 16,
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
  populayandrecent:{
    display:'flex',
    flexDirection:'row',
    gap:12,
  },
  popularyactive:{
    width:'48%',
    height:36,
    borderRadius:14,
    borderWidth:1,
    borderColor:'#5F49A5',
    backgroundColor:'#2C2D3D',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:4,
  },
  populary:{
    width:'48%',
    height:36,
    borderRadius:14,
    borderWidth:1,
    borderColor:'#2C2D3D',
    backgroundColor:'#2C2D3D',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:4,
  },
  textpopulary:{
    fontSize:14,
    color:'#fff',
    fontWeight:500,
  },
  popularyShop:{
    width:'100%',
    padding:12, 
    justifyContent:'center',
    gap:10,
    borderRadius:14,
    backgroundColor:'#1C1D26',
  },
  popularytext:{
    width:'100%',
    color:'#545F6A',
    fontSize:14, 
    fontWeight:400,
  },
  onePopularyShop:{
    display:'flex',
    paddingVertical:8, 
    paddingHorizontal:12, 
    justifyContent:'center',
    alignItems:'center',
    borderRadius:14,
    backgroundColor:'#2C2D3D',
  },
  onePopularyShopText:{
    fontSize:14,
    fontWeight:400,
    color:'#fff',
  },
  popularyShopRow:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    gap:3,
  },
});

export default ShopsPage;
