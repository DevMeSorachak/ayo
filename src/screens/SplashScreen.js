import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView } from 'react-native'
import { Colors, Fonts } from '../contants';
import {  Header,  } from '../../components';


const SplashScreen = () => {

  

  return (
      <>
          <Header/>
          
      </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_GREEN,

    },
    titleText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 32,
        fontFamily: Fonts.KANIT_BOLD,
    }
})



export default SplashScreen;

