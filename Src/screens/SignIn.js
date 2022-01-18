import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    handleSubmit,
    Button,
} from 'react-native';


import background from '../assets/bgr.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation } from '@react-navigation/native';
import CustomButton from '../CustomButton/CustomButton';
import logo from '../assets/logo.jpeg';






const SignIn=() => {
    const navigation = useNavigation();

    const onSignupPressed =() =>{
        console.warn ('Sign Up');

        navigation.navigate('SignUp')
    }
    const onLoginPressed =() =>{
        console.warn ('Welcome');

        navigation.navigate('Home')
    }

    
    return(
       <ImageBackground source={background} 
       style={styles.backgroundContainer}> 
       <View style={styles.logoContainer}>
           <Image source={logo} style={styles.logo}/>
           <Text style={styles.logoText}>
            Welcome To WebComics  App
           </Text>
       </View>
       <View style={styles.inputContainer}>
       <Icon name={'person'} size={28} color={'rgba(255,255,255,0.7)'}
       style= {styles. inputIcon}
    
       />
           <TextInput style={styles.input} 
           placeholder={'Username'}
           placeholderTextColor={'rgba(255, 255, 255,0.7)'}
           underlineColorAndroid= 'transparent' />
       </View>
       {/* <View style={styles.inputContainer}> 
       <Icon name={'mail'} size={28} color={'rgba(255,255,255,0.7)'}
       style= {styles. inputIcon}
    
       />
            <TextInput style={styles.input} 
           placeholder={'Email'}
           placeholderTextColor={'rgba(255, 255, 255,0.7)'}
           underlineColorAndroid= 'transparent' />
       </View>
       <View style={styles.inputContainer}> 
       <Icon name={'date'} size={28} color={'rgba(255,255,255,0.7)'}
       style= {styles. inputIcon}
    
       />
            <TextInput style={styles.input} 
           placeholder={'DOB'}
           placeholderTextColor={'rgba(255, 255, 255,0.7)'}
           underlineColorAndroid= 'transparent' />
       </View> */}
       <View style={styles.inputContainer}> 
       <Icon name={'lock'} size={28} color={'rgba(255,255,255,0.7)'}
       style= {styles. inputIcon}
    
       />

           <TextInput 
           style={styles.input} 
           placeholder={'Password'}
           secureTextEntry={true}
           placeholderTextColor={'rgba(255, 255, 255,0.7)'}
           underlineColorAndroid= 'transparent' />
       </View>
      
       <CustomButton
           style={styles.btnLogin} 
                   text= 'Login' onPress={onLoginPressed}
                   type = 'TERTIARY'
                   bgColor="#E7EAF4"
                   fgColor="#4765A9"/>
                  
              
                  <CustomButton 
                  style={styles.btnLogin}
                   text= 'Signup' onPress={onSignupPressed}
                   type = 'TERTIARY'
                   bgColor="#E7EAF4"
                   fgColor="#4765A9"/>
                  

         
          

       </ImageBackground>
    );

};

const styles = StyleSheet.create({
   backgroundContainer: {
       flex: 1,
       width: null,
       height: null,
       justifyContent: 'center',
       alignItems: 'center',
   },

   logoContainer : {
       alignItems: 'center',
       marginBottom: 50,
   },
  logo: {
      width: 120,
      height:120,
  },
  logoText: {
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
      marginTop: 10,
      opacity: 0.5
  },

  input: {

    width : 300,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 50,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,

  },
  inputIcon: {
      position: 'absolute',
      top: 8 ,
      left: 37,

  },

  inputContainer: {
       marginTop: 15,
  },
  btnLogin:{
    width : 200,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,

   

  },

text:{
       color: 'rgba(255,255,255,0.7)',
       fontSize: 16,
       textAlign: 'center',
  },

});

export default SignIn;