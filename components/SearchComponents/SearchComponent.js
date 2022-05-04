import React, {useState, useEffect} from "react"; 
import { Text , View, TouchableOpacity, StyleSheet, TextInput, FlatList,SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome"
import { Fonts } from "../../src/contants";
import ListItem from "./ListItem";
import { useNavigation } from '@react-navigation/native';


const SearchComponent = ( ) => {

  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('')
  const navigation = useNavigation();
  const tempDate= new Date();
  const tempMonth = tempDate.getMonth() + 1 ;
  const Month = tempMonth.toString();

  const fetchData = () => {
    async function quickStart()  {
      
      // use realm to interact with database
      const realm = await Realm.open({
        path: "myrealm",
        schema: [TaskSchema],
      });
  
  
  
      // ### read records from database
      const tasks = realm.objects(Year);

      
      
     
      tasks.map((task) => setFilteredData((prevFilteredData) => [
        ...prevFilteredData,
  
          {title: task.title, time: task.time, date: task.date, description: task.description}
        ,
      ] )
      )
      tasks.map((task) => setMasterData((prevFilteredData) => [
        ...prevFilteredData,
  
          {title: task.title, time: task.time, date: task.date, description: task.description}
        ,
      ] )
      )
  
      // Remember to close the realm
      realm.close();
    
    }
    
    
    
    
    
    quickStart().catch((error) => {
      
    });

  }


  
  const Year = tempDate.getFullYear() + "";

 
  
  useEffect(()=> {
   fetchData();
  }, []);
  
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title ? 
          item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) >- 1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  }

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

  
  

    return (
    <SafeAreaView 
      style= {{backgroundColor: 'rgb(245, 245, 245)',flex: 1}}
    >
      <View style={{
        flexDirection: "row",
        height: 90,
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 2,
        marginRight: 20,
        
      }}>
        <View style={styles.goBackSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon style={styles.searchIcon} name="arrow-left" size={21} color="rgb(150,150,150)"/>
        </TouchableOpacity>
        </View>
        <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="search" size={20} color="rgb(175,175,175)"/>
            <TextInput
                style={styles.input}
                placeholder=" Search Here!"
                onChangeText={(text)=>{searchFilter(text)}}
                underlineColorAndroid="transparent"
            />
        </View>
        
    </View>
  
      <FlatList data={filteredData} 
       
        renderItem={({item}) => (<ListItem item={item}
      />)}
      />  
    </SafeAreaView>

    

    )
}




const styles = StyleSheet.create({
    btnTouchable: {
      backgroundColor: "gray",
      color: "orange",
      width: 25,
      borderRadius: 5,
      margin: 1    
    },
    searchSection: {
      flex: 0.88,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(211,211,211)',
      borderRadius: 10,
      fontFamily: Fonts.KANIT_LIGHT
  },
  goBackSection: {
    flex: 0.1
  }
  ,
  searchIcon: {
      marginBottom: 5,
      padding: 10,
      height: 40
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      height: 40,
      fontFamily: Fonts.KANIT_LIGHT
      
  },
    
  });

export default SearchComponent;