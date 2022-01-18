import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  width,
  TextInput,
   TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';
import comi from './com';
import {useNavigation } from '@react-navigation/native';




  const Home = () => {
    const navigation = useNavigation();
    const onCardPressed =() =>{
      console.warn ('Hey there..!');

      navigation.navigate('Details')
  }
  

  const categories =['Fantasy', 'Time-Travel', 'RomCom', 'Action', 'Drama'];

  const [categoryIndex, setCategoryIndex] = React.useState(0)

  const CategoryList =() => {
    return (
    <View style={style.categoryContainer}> 

    {categories.map((item, index)=> (
    <TouchableOpacity key={index} 
    activeOpacity={0.6}
    onPress={() => setCategoryIndex(index)}>

    

      <Text 
      key ={index} 
      style={[
        style.categoryText,
         categoryIndex == index && style.categoryTextSelected
         ]}>
        {item}
        </Text>
        </TouchableOpacity>
    ))}

    </View>
    );
  };

  const Card =({comi}) =>{
    return (
      <TouchableOpacity
      activeOpacity={0.8}
      onPress={onCardPressed}>
    <View style={style.card}>
      <View style={{alignItems: 'flex-end'}}>
        <View 
        style={{
          width:30,
          height: 30, 
          borderRadius: 15, 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: comi.like
          ? 'rgba(245, 42, 42,0.2)'
          : 'rgba(0,0,0,0.2) ',
      }}>
         <Icon
                name="star"
                size={20}
                color={comi.like ? COLORS.red : COLORS.black}
              />
        
      </View>
     
      </View>
      <View style={{height: 100, alignItems: 'center'}}>
      <Image
              source={comi.img}
              style={{height: 100, 
                width:200, 
                resizeMode: 'contain',
                alignItems: 'stretch',
              }}
            />
            </View>

          <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>
            {comi.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>

            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
             Chapters: {comi.chapters}
             
            </Text>
            
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: COLORS.red,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>

             <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>          

      </View>
    </View>
    </View>
    </TouchableOpacity>
    );
  };
   
return (
  <SafeAreaView style ={{
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  }}>
    <View style={style.header}>
      <View>
      <Text style={{fontSize: 38, fontWeight: 'bold',color: COLORS.red}}>
        WEB COMICS
      </Text>
    </View>
    <Icon name ='list' size={28}/>
    </View>
    <View style= {{marginTop: 30, flexDirection: 'row'}}>
    <View style={style.searchContainer}>
      <Icon name= 'search' size={25} style={{marginLeft: 20}}/>
      <TextInput placeholder="Search" />
    </View>
    <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
    </View>
    <CategoryList />

    <FlatList numColumns={1} 
    data={comi} 
    renderItem={({item}) => <Card com= {item}/>}/>


  </SafeAreaView>
);
};


const style = StyleSheet.create({
  
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },

  sortBtn: {
    marginLeft: 10,
    height: 48,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.red,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.red,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },



});
export default Home;
