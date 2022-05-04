import React ,{ useState} from 'react';
import Realm from 'realm';
import {TouchableOpacity,Text,View,Image,ScrollView,TextInput,StyleSheet,Alert, Button, Platform} from 'react-native';
import { Fonts } from '../../src/contants';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DateAndTimePickerDialog, textFromFetchDate, textFromFetchTime, textFromFetchMonth, textFromFetchYear} from './DateAndTimePickerDialog';

const DatePickerComponent = () => {
     const [storeTitle, setStoreTitle] = useState('')
     const [storeDescription, setStoreDescription] = useState('')
     
     const navigation = useNavigation();
      


        
            function _handlePressStore() {
                const TaskSchema = {
                    name: textFromFetchYear,
                    properties: {
                        date: "string",
                        description: "string",
                        month: "string",
                        time: "string",
                        title: "string", 
                    },
                    
                  };
                (async () => {
  
                    // use realm to interact with database
                    const realm = await Realm.open({
                      path: "myrealm",
                      schema: [TaskSchema],
                    });
                    realm.write(() => {
                        task1 = realm.create(obj.year, {
                            date: obj.date,
                            description: obj.description,
                            month: obj.month,
                            time: obj.time,
                            title: obj.title
                        });
                      
                        console.log(`created a tasks: ${task1.title}`);
                        
                        
                      });   
                    // Remember to close the realm
                    realm.close();
                    
                })();
                let obj = {
                    year: textFromFetchYear,
                    date: textFromFetchDate,
                    description: storeDescription,
                    month: textFromFetchMonth,
                    time: textFromFetchTime,
                    title: storeTitle
                }
              
                console.log(obj)
                
                  
            
        }
       // End Of Async



    return(
        <View style={{backgroundColor: 'rgb(245,245,245)'}}>
                       
            <Text></Text>
            <View>
                <View style={styles.textStyle}>
                    <Text style={{marginLeft: 5, paddingRight: 5}}><Icon name="edit" size={40} color='rgb(192,192,192)'/></Text>         
                    <TextInput placeholder=' ชื่อเรื่อง' style={styles.nameStyle}
                    returnKeyLabel = {"next"}
                    onChangeText={(text) => setStoreTitle(text)}
                    />
                    
                </View>
                <DateAndTimePickerDialog/>
                

                <View style={styles.textStyle}>
                    <Text style={{marginLeft: 5, paddingRight: 5}}><Icon name="file-text" size={40} color='rgb(192,192,192)'/></Text> 
                    <TextInput multiline textAlignVertical='top' placeholder=' บันทึก' style={styles.memStyle}
                    returnKeyLabel = {"next"}
                    onChangeText={(text) => setStoreDescription(text)}
                    />
                </View>
            </View> 
            <View style={{
                    justifyContent: "space-around", 
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop:20
                    }}>
                <TouchableOpacity onPress={() => navigation.goBack()} onPressIn={_handlePressStore}>
                    <View style={styles.buttonStyle2}>
                        <Text style={styles.textStyleButton}>บันทึก</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=> navigation.goBack()}> 
                    <View style={styles.buttonStyle2}>           
                        <Text style={styles.textStyleButton2}>ยกเลิก</Text>
                    </View>
                </TouchableOpacity>       
            </View>     
        </View>
        
    )
    
}

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: Fonts.KANIT_BOLD
        
    },
    textStyle: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: Fonts.KANIT_BOLD
        
    },
    nameStyle: {
        height:40,
        width:300,
        borderColor: 'gray',
        borderWidth: 1,
        fontFamily: Fonts.KANIT_BOLD
    },
    memStyle: {
        height:160,
        width:300,
        borderColor: 'gray',
        borderWidth: 1,
        fontFamily: Fonts.KANIT_BOLD
    },
    buttonStyle2: {
        width:180, 
        height:40, 
        backgroundColor: 'rgb(211,211,211)', 
        borderRadius: 10, 
        alignItems: "center",
        justifyContent: "center",
    },
    buttonStyle3: {
        width:180, 
        height:40, 
        backgroundColor: 'rgb(211,211,211)', 
        borderRadius: 10, 
        alignItems: "center",
        justifyContent: "center",
    },
    textStyleButton: {
        fontFamily: Fonts.KANIT_REGULAR,
        fontSize: 16,
        color: 'rgb(50,50,55)'
    },
    textStyleButton2: {
        fontFamily: Fonts.KANIT_LIGHT,
        fontSize: 16
    },
  });

export default DatePickerComponent;