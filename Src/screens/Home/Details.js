import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import  COLORS  from '../Home/colors';
import com from './com';
import {useNavigation } from '@react-navigation/native';

const Details = () => {
  
    
    const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="list" size={28} />
      </View>
      <View>
        <Text style={{alignItems: 'center' , padding: 100}}>
          Hey There...!!
        </Text>
      </View>
      </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
},


})
export default Details;
