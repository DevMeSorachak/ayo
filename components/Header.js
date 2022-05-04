import React , {Component, useState, useEffect} from "react";
import { Text , View, TouchableOpacity, StyleSheet, Linking, SafeAreaView } from "react-native";
import { Fonts } from '../src/contants';
import Icon from "react-native-vector-icons/dist/FontAwesome"
import { useNavigation } from '@react-navigation/native';
import MonthPage from './MonthComponents/MonthPage';
import YearPage from "./YearlyComponents/YearPage";
import DayComponent from "./DayComponents/DayComponent";

const  arrayPage = [<MonthPage/>, <DayComponent/>, <YearPage/>];

const Header = () => {
    const [colorBackgroundMonth,setColorBackgroundMonth] = useState('rgb(169,169,169)');
    const [colorTextMonth,setColorTextMonth] = useState('rgb(245,245,245)');
    const [stateMode,setStateMode] = useState(arrayPage[0]);
    const [colorBackgroundDay,setColorBackgroundDay] = useState('');
    const [colorBackgroundYear,setColorBackgroundYear] = useState('');
    const [colorTextDay,setColorTextDay] = useState();  
    const [colorTextYear,setColorTextYear] = useState();
    const navigation = useNavigation();

    function onPressDay() {
      setStateMode(arrayPage[1]);
      setColorBackgroundDay('rgb(169,169,169)');
      setColorTextDay('rgb(245,245,245)');
      setColorBackgroundMonth('rgb(211,211,211)');
      setColorTextMonth("rgb(120,120,120)");
      setColorBackgroundYear('rgb(211,211,211)');
      setColorTextYear("rgb(120,120,120)");
  
    }

    function onPressMonth() {
      setStateMode(arrayPage[0]);
      setColorBackgroundMonth('rgb(169,169,169)');
      setColorTextMonth('rgb(245,245,245)');
      setColorBackgroundDay('rgb(211,211,211)');
      setColorTextDay("rgb(120,120,120)");
      setColorBackgroundYear('rgb(211,211,211)');
      setColorTextYear("rgb(120,120,120)");
    }

    function onPressYear() {
      setStateMode(arrayPage[2]);
      setColorBackgroundYear('rgb(169,169,169)');
      setColorTextYear('rgb(245,245,245)');
      setColorBackgroundDay('rgb(211,211,211)');
      setColorTextDay("rgb(120,120,120)");
      setColorBackgroundMonth('rgb(211,211,211)');
      setColorTextMonth("rgb(120,120,120)");
    }
    
  
    return (
    <>
      <View
        style={{
            flexDirection: "row",
            height: 60,
            padding: 20,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: 'rgb(230,230,230)',
            
          }}
        >
          <View style={{ backgroundColor: 'rgb(245,245,245)', flex: 0.25, 
          flexDirection: "row", justifyContent: "center", 
          alignItems: "center", borderRadius: 10, 
        }}>
          <TouchableOpacity style={styles.searchTouchable}
          onPress={()=> navigation.navigate('PressSearch')}
          >
            <Icon name="search" size={15} color="rgb(192,192,192)"></Icon>
            <Text style={styles.headerFontOnText}> ค้นหา</Text>
          </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: 'rgb(211,211,211)', flex: 0.35,
          flexDirection: "row", justifyContent: "center", 
          borderRadius: 10,  alignItems: "center",  }}>

              <TouchableOpacity style={[styles.btnBackGroundSelect , {backgroundColor: colorBackgroundDay}]}
                onPress={ onPressDay } 
              >
                <Text style={[ {color: colorTextDay, fontFamily: Fonts.KANIT_REGULAR}]}>  วัน  </Text>
              </TouchableOpacity>
              <Text> | </Text>

              <TouchableOpacity style={[styles.btnBackGroundSelect, {backgroundColor: colorBackgroundMonth}]}
                onPress={ onPressMonth }
              >
                <Text style={[ {color: colorTextMonth, fontFamily: Fonts.KANIT_REGULAR}]}> เดือน </Text>
              </TouchableOpacity>
              <Text > | </Text>

              <TouchableOpacity style={[styles.btnBackGroundSelect, {backgroundColor: colorBackgroundYear}]}
                onPress={ onPressYear}
              >
                <Text style={[ {color: colorTextYear, fontFamily: Fonts.KANIT_REGULAR}]}>  ปี  </Text>
              </TouchableOpacity>
            
          </View>
          <View style={{ flex: 0.2, backgroundColor: null,
                        justifyContent: "space-between", 
                        flexDirection: "row",
                        alignItems: "center",
                        
        }}>
          
          <TouchableOpacity style={styles.btnTouchable} onPress={() => navigation.navigate('PressNewEvent')}>
            <Text style={{marginLeft: 5, paddingRight: 5}}><Icon name="plus" size={20} color="rgb(192,192,192)"/></Text>
              
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTouchable} onPress={() => navigation.navigate('PressToDoList')}>
            
              <Text style={{marginLeft: 5, paddingRight: 5}}><Icon name="list" size={20} color="rgb(192,192,192)"/></Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTouchable}>
            
                <Text style={{marginLeft: 5, paddingRight: 5}}><Icon name="clock-o" size={20} color="rgb(192,192,192)"/></Text>
            
          </TouchableOpacity>
      
            
          </View>
        
      </View>
      
      
    {stateMode}
      
    

  </>


    

    ) 

    
}

const styles = StyleSheet.create({
    btnTouchable: {
      backgroundColor: 'rgb(245,245,245)',
      color: "orange",
      width: 27,
      height: 20,
      borderRadius: 5,
      margin: 2,
      
    },
    searchTouchable: {
        flexDirection: "row", 
        justifyContent: "center",
        alignItems: "center",
        
    },btnBackGroundSelect: {
        backgroundColor: 'rgb(245,245,245)',
        borderRadius: 10,
        height: "auto",
        marginBottom: "auto",
        color: "black"
        
    }, btnColorSelect: {
        color: "black"
    }, 
    headerFontOnText : {
      fontFamily: Fonts.KANIT_REGULAR,
      color: "rgb(120,120,120)",
    }
  });

export default Header;