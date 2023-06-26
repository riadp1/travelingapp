import { View, Text, Animated, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';







const SplashIcon = () => {

    const nav = useNavigation(); 

    useLayoutEffect(()=> {
     nav.setOptions(
         {headerShown: false,}
     )
    },[])



    const logoRef = useRef(null);
  const logoTranslate = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      nav.navigate('login'); // Replace 'NextScreen' with the name of the screen you want to navigate to
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timeout); // Clear the timeout when the component unmounts
  }, []);

  const handleNextScreen = () => {
    Animated.timing(logoTranslate, {
      toValue: { x: -200, y: -200 }, // Adjust the value as needed for desired dragging distance
      duration: 500, // Duration of the animation
      useNativeDriver: true,
    }).start(() => {
      nav.navigate('login'); // Replace 'NextScreen' with the name of the screen you want to navigate to
    });
  };


  





  return (
    <View  onAnimationEnd={() => logoRef.current.fadeOut(500)} style={{justifyContent:"center", alignItems:"center" ,width:"100%",height:"100%" }} >

        <Animated.View ref={logoRef}
        style={[ logoTranslate.getLayout()]}>

        <Text  animation="fadeIn"
          duration={1000} style={{backgroundColor:"#30323D",
       color:"#fff",width:264,
       textAlign:"center",
       justifyContent:"center",
       padding:30,
       fontSize:42,
       fontWeight:"bold",
       borderBottomLeftRadius:50,
       borderTopRightRadius:50
       

       }}>SIYAHA</Text>

       </Animated.View>
      
    </View>
  )
}

export default SplashIcon