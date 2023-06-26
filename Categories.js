import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"


const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Category}><Foundation name='mountains' size={25}/></Text>
      <Text style={styles.Category}><Ionicons name='fast-food-outline' size={25}/></Text>
      <Text style={styles.Category}><FontAwesome5 name='hotel' size={25}/></Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
     top:90,
     marginTop:33,
     width:250,
     flexDirection:"row",
     justifyContent:"space-between" 
      
    },

    Category:{

    color:"#fff",
    width:50,
    height:50,
    paddingTop:10,
    backgroundColor:"#30323D",
    textAlign:"center",
    justifyContent:"center",
    borderRadius:50
    
    }
});

export default Categories