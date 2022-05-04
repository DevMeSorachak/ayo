import React, { useState } from 'react';
import { View , Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome";
import { Fonts } from '../../src/contants';

const YearPage = () => {

    const [selectYear, setYear] = useState(2022);
    const lastYear = () => setYear(selectYear - 1);
    const nextYear = () => setYear(selectYear + 1);

    let January, February, March, April, May, June, July, August, September, October, November, December;

    if(selectYear % 28 == 2 || selectYear % 28 == 13 || selectYear % 28 == 19){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Normal/A-Mon1Jan/12.png')}/>;

    } else if(selectYear % 28 == 3 || selectYear % 28 == 14 || selectYear % 28 == 25){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Normal/B-Tues1Jan/12.png')}/>;

    } else if(selectYear % 28 == 9 || selectYear % 28 == 15 || selectYear % 28 == 26){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Normal/C-Wed1Jan/12.png')}/>;
        
    } else if(selectYear % 28 == 10 || selectYear % 28 == 21 || selectYear % 28 == 27){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Normal/D-Thurs1Jan/12.png')}/>;
        
    } else if(selectYear % 28 == 5 || selectYear % 28 == 11 || selectYear % 28 == 22){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Normal/E-Fri1Jan/12.png')}/>;
        
    } else if(selectYear % 28 == 6 || selectYear % 28 == 17 || selectYear % 28 == 23){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Normal/F-Sat1Jan/12.png')}/>;
        
    } else if(selectYear % 28 == 1 || selectYear % 28 == 7 || selectYear % 28 == 18){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Normal/G-Sun1Jan/12.png')}/>; 

    }  else if(selectYear % 28 == 8){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/A-Mon1Jan/12.png')}/>;

    } else if(selectYear % 28 == 20){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/B-Tues1Jan/12.png')}/>;

    } else if(selectYear % 28 == 4){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/C-Wed1Jan/12.png')}/>;
        
    } else if(selectYear % 28 == 16){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/D-Thurs1Jan/12.png')}/>;
        
    } else if(selectYear % 28 == 0){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/E-Fri1Jan/12.png')}/>;
        
    } else if(selectYear % 28 == 12){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/F-Sat1Jan/12.png')}/>;
        
    } else if(selectYear % 28 == 24){
        
        January = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/1.png')}/>;
        February = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/2.png')}/>;
        March = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/3.png')}/>;
        April = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/4.png')}/>;
        May = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/5.png')}/>;
        June = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/6.png')}/>;
        July = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/7.png')}/>;
        August = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/8.png')}/>;
        September = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/9.png')}/>;
        October = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/10.png')}/>;
        November = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/11.png')}/>;
        December = <Image style={styles.monthPicture} source={require('./Year/Have29Feb/G-Sun1Jan/12.png')}/>; 

    }  

    return(
        <View style={styles.columnStyle}>
            <View style={styles.fieldYear}>
                <TouchableOpacity style={styles.touchAbleChangeYear} onPress={lastYear}>
                    <Text><Icon name="backward" size={30}/></Text>
                    </TouchableOpacity>
                <Text style={styles.fontYear}>{selectYear}</Text>
                <TouchableOpacity style={styles.touchAbleChangeYear} onPress={nextYear}>
                    <Text><Icon name="forward" size={30}/></Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.rowStyle}>
                <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {January}       
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {February}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {March}
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.rowStyle}>
            <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {April}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {May}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {June}
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.rowStyle}>
            <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {July}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {August}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {September}
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.rowStyle}>
            <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {October}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {November}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchAbleMonth}>
                    <View>
                        {December}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
    )
    
}

const styles = StyleSheet.create({
    columnStyle: {
        marginTop: 15,
    },
    rowStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 13,
        
    },
    touchAbleMonth: {
        width:120, 
        height:120, 
        backgroundColor: 'rgb(211,211,211)', 
        borderRadius: 10, 
        alignItems: "center",
        justifyContent: "center",
    },
    monthPicture: {
        width: 115, 
        height: 115,
        borderRadius: 10,
    },
    fontYear: {
        fontSize:28,
        fontFamily: Fonts.KANIT_REGULAR,
        color: 'rgb(130,130,130)'
    },
    fieldYear: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    touchAbleChangeYear: {

    }   
  });
export default YearPage;
