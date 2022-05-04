import React, {useState, useEffect} from "react"; 
import {TouchableOpacity,Text,View,Image,ScrollView,TextInput,StyleSheet,Alert, Button, Platform, FlatList} from 'react-native';
import Realm from "realm";
import ListItem from "./ListItem";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from "../../src/contants";

const TodoListComponent = () => {
  // schema for database objects
  const tempDate= new Date();
  const tempMonth = tempDate.getMonth() + 1 ;
  const Month = tempMonth.toString();
  const navigation = useNavigation();
  
  const Year = tempDate.getFullYear() + "";
  
  const [filteredData, setFilteredData] = useState([]);

  const [textMonthShow, setTextMonthShow] = useState('');
  
  const [items, setItems] = useState([
    
  ])
  
  useEffect(()=> {
    filteredData;
  }, []);
  

  
  const TaskSchema = {
    name: Year,
    properties: {
        date: "string",
        description: "string",
        month: "string",
        time: "string",
        title: "string",
    },
    
  };

  
  async function quickStart()  {
      
    // use realm to interact with database
    const realm = await Realm.open({
      path: "myrealm",
      schema: [TaskSchema],
    });



    // ### read records from database
    const tasks = realm.objects(Year);
    // console.log(`The lists of tasks are: ${tasks.map((task) => { return task.title + " " + task.time + " " + task.date + " " + task.description + '\n\r' })}`);
    
    // const YearTasks =   realm.objects(Year);
    const tasksMonth =   tasks.filtered(`month == '${Month}'`);
    
   
    tasksMonth.map((task) => setFilteredData((prevFilteredData) => [
      ...prevFilteredData,

        {title: task.title, time: task.time, date: task.date}
      ,
    ] )
    )

    // Remember to close the realm
    realm.close();
  
  }
  
  
  
  
  
  quickStart().catch((error) => {
    
  });

  
  return (
    <View
      style= {{backgroundColor: 'rgb(245, 245, 245)'}}
    >
      <View style={{
        flexDirection: "row",
        height: 90,
        justifyContent: "space-between",
        alignItems: "center",
        
        backgroundColor: 'rgb(249, 249, 249)'
        }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 20}}>
        <Icon style={styles.searchIcon} name="arrow-left" size={21} color="rgb(150,150,150)"/>
      </TouchableOpacity>
       <Text style={styles.headerList}>
          บันทึกประจำเดือน {Month}/{Year}
        </Text>
      </View>
      
      
      <FlatList data={filteredData} 
        renderItem={({item}) => (<ListItem item={item}
      />)}
      />  
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
      padding: 15,
      borderBottomWidth: 1,
      // borderColor: '#eee',  
      margin: 5     
  },
  listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      

  },
  listItemText: {
      fontSize: 16,
      fontFamily: Fonts.KANIT_LIGHT
      
  },
  importantDay: {
      fontSize: 17,
      backgroundColor: 'rgb(183, 128, 207)',
      borderRadius: 8,
      width: 100,
      textAlign: "center",
      fontFamily: Fonts.KANIT_MEDIUM,
      
  },
  headerList: {
    flex:1,
    fontSize: 23,
    justifyContent: "center",
    textAlign: "center",
    
    fontFamily: Fonts.KANIT_MEDIUM,

  }
  
})

export default TodoListComponent;
