import React ,{ useState } from 'react';
import {TouchableOpacity,Text,View,StyleSheet, Platform} from 'react-native';
import { Fonts } from '../../src/contants';
import DateTimePicker from '@react-native-community/datetimepicker';

let textFromFetchDate = '';
let textFromFetchTime = '';
let textFromFetchMonth = '';
let textFromFetchYear = '';
const DateAndTimePickerDialog = () => {
    
    const tempTime = new Date();
    const textTempDate = getTimeDateNow();
    const textTempTime = getTimeNow();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState(textTempDate);
    const [text2, setText2] = useState(textTempTime );
    
    

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        var tempData = new Date(currentDate);
        
        var fDate = tempData.getDate() + '/' + (tempData.getMonth() + 1) + '/' + tempData.getFullYear();
        if ((tempData.getHours()  >= 10) && (tempData.getMinutes() >= 10)){
            var fTime = (tempData.getHours()  ) + ' : '  + tempData.getMinutes();
        } else if ((tempData.getHours()  >= 10) && (tempData.getMinutes() < 10)){
            var fTime = (tempData.getHours()  ) + ' : 0' + tempData.getMinutes();
        } else if ((tempData.getHours()  < 10) && (tempData.getMinutes() >= 10)) {
            var fTime = '0' + (tempData.getHours()  ) + ' : ' + tempData.getMinutes();
        } else if (tempData.getHours()  < 10 && (tempData.getMinutes() < 10)){
            var fTime = '0' + tempData.getHours()   + ' : 0' + tempData.getMinutes();
        }
        if ((tempData.getDate()))
        
        textFromFetchMonth = (tempData.getMonth() + 1) + "";
        textFromFetchYear = tempData.getFullYear() + "";
        textFromFetchTime = fTime;
    
        if (( tempData.getDate() >= 10) && ((tempData.getMonth() +1) >= 10)) {
            var fDateFormat = tempData.getFullYear() + '-' + (tempData.getMonth() + 1) + '-' + tempData.getDate();
        } else if ((tempData.getDate() >= 10) && (tempData.getMonth() + 1) < 10) {
            var fDateFormat = tempData.getFullYear() + '-0' + (tempData.getMonth() + 1) + '-' + tempData.getDate();
        } else if ((tempData.getDate() < 10) && (tempData.getMonth() + 1) >= 10) {
            var fDateFormat = tempData.getFullYear() + '-' + (tempData.getMonth() + 1) + '-0' + tempData.getDate();
        } else if ((tempData.getDate() < 10) && (tempData.getMonth() + 1) < 10) {
            var fDateFormat = tempData.getFullYear() + '-0' + (tempData.getMonth() + 1) + '-0' + tempData.getDate();
        } 

        textFromFetchDate = fDateFormat;
        
        setText(fDate);
        setText2(fTime);

    }
        
    function getTimeDateNow () {
        let tempDate = tempTime.getDate() + '/' + (tempTime.getMonth() +1) + '/' + tempTime.getFullYear();
        return (tempDate);
    } 

    function getTimeNow () {
        if ((tempTime.getHours() + 1 > 10)) {
            var tempTimeCurrent = (tempTime.getHours() + 1 ) + ' : ' + '00';
        } else {
            var tempTimeCurrent = '0' + (tempTime.getHours() + 1 ) + ' : ' + '00';
        }
        return (tempTimeCurrent);
    }

    const  showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }
    return (
        <View >
                    <View style={styles.textHeaderDatePickComponent}>
                    <Text style={styles.showText}>วันและเวลาที่ต้องการบันทึก</Text>
                    </View>
                    
                    <View style={{ marginTop: 0, marginBottom: 10 ,flexDirection: "row", justifyContent: "space-around", alignItems: "center" } }>
                        <TouchableOpacity style={styles.buttonStyle} onPressOut={() => showMode('date')}>
                            <Text style={styles.textStyleButton} >{text}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => showMode('time')}>
                            <Text style={styles.textStyleButton} >{text2}</Text>
                        </TouchableOpacity>
                    </View>
                    

                    {show && (
                        <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChange}
                    />)}
                
        </View>

    )

}

const styles = StyleSheet.create({
    buttonStyle: {
        width:180, 
        height:40,  
        borderRadius: 10, 
        alignItems: "center",
        justifyContent: "center",
        fontFamily: Fonts.KANIT_BOLD,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: 'rgb(211,211,211)',
    },
    nameStyle: {
        height:40,
        width:300,
        borderColor: 'gray',
        borderWidth: 1,
        fontFamily: Fonts.KANIT_BOLD,
    },
    buttonStyle2: {
        width:180, 
        height:40, 
        backgroundColor: 'rgb(211,211,211)', 
        borderRadius: 10, 
        alignItems: "center",
        justifyContent: "center",
    },
    showText: {
        marginTop: 4,
        fontFamily: Fonts.KANIT_MEDIUM,
        fontSize: 18,
        color: 'rgb(125,125,125)'
        
    },
    textStyleButton: {
        fontFamily: Fonts.KANIT_REGULAR,
        fontSize: 20,
        
    },
    textHeaderDatePickComponent: {
        alignItems: "center"
    }

  });

export  {DateAndTimePickerDialog , textFromFetchDate, textFromFetchTime, textFromFetchMonth, textFromFetchYear};