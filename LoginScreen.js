import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useState } from 'react';
import Entypo from "react-native-vector-icons/Entypo"
import  AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigation(); 

  return (
    
    <ImageBackground imageStyle={{width:600, backgroundColor:"black", opacity:0.8}} resizeMode='cover' source={require('../assets/log.jpg')} style={styles.container}>
       <Text  animation="fadeIn"
           style={{backgroundColor:"#30323D",
       color:"#fff",
       width:160,
       height:60,
       top:210,
       textAlign:"center",
       justifyContent:"center",
       padding:10,
       fontSize:25,
       position:"absolute",
       fontWeight:"bold",
       borderBottomLeftRadius:25,
       borderTopRightRadius:25,
       zIndex:1
       

       }}>SIYAHA</Text>
  <ImageBackground imageStyle={{borderRadius:30, backgroundColor:"black", opacity:0.5}} style={styles.contain}>
    <Text style={{color:"#fff",fontWeight:"700",fontSize:25,marginBottom:50}}>New here? Sign up</Text>
    <View style={styles.signup}>
      <Text  onPress={()=> nav.navigate('explore')} style={styles.signtext}><AntDesign size={20} color='#EA4335' name='google' /> Sigh up with Google</Text>
      <Text style={styles.signtext}><Entypo size={20} color='#1877F2' name='facebook' /> Sigh up with Facebook</Text>
    </View>
    
    <Text style={styles.term}>By Signing up, you agree tp Siyaha's <Text style={{textDecorationLine:"underline"}}>Terms of use </Text> and <Text style={{textDecorationLine:"underline"}}> Privacy Plolicy</Text></Text>
  </ImageBackground >



    </ImageBackground>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
   
    
  
  },

  contain:{
    alignItems:"center",
    top:240,
    width:326,
    height:428,
    bottom:146,
    paddingTop:64,
    paddingLeft:16,
    paddingRight:16


  },
  signtext:{
    color:"#000",
    width:294,
   backgroundColor:"#E0E0E9",
   marginBottom:20,
   padding:12,
   textAlign:"center",
   borderRadius:8,
  
   
  },
  term:{
    color:"#fff",
    textAlign:"center",
    padding:20,
    top:38,
    fontSize:14,
    lineHeight:20
  }
});

export default LoginScreen;