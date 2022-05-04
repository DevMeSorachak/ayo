import React, {useState} from 'react';
import { View, TouchableOpacity, Text, Button} from 'react-native';
import { Agenda} from 'react-native-calendars';
import { Card, Avatar} from 'react-native-paper';
import { Fonts } from '../../src/contants';
import Realm from "realm";


const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const DayComponent = () => {
  const [items, setItems] = useState({});
  
  const [markTitle, setTitle] = useState([]);
  const [markDate, setDate] = useState([]);
  const newItems = {};
  var hadData = false;
  const loadItems = () => {
    // console.log("loadItems")
    setTimeout(() => {
      hadData = false;
      for (let i = 0; i < markDate.length; i++) {
        const strTime = markDate[i];
        // console.log(strTime);
        // console.log(items[strTime]);
        
        
      if (!items[strTime]) {
         // 14/4/2022
        items[strTime] = [];
        items[strTime].push({
          name: markTitle[i]
        });
      }

      
      
      for (let j = 0; j < items[strTime].length; j++) {
          // console.log(items[strTime]);
          // console.log(markTitle[i]);
          if (((items[strTime][j].name) !== markTitle[i]) && (items[strTime].map(object => object.name).indexOf(markTitle[i]) == -1)) {
            items[strTime].push({
              name: markTitle[i]
            });
            hadData = true;
          }
        }


    }
     
    // check for Item
    if ( newItems == {}) {
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    } 
    // check for It have Item
    if (hadData) {
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }
  
    
    
    }, 1000);
  };

  const TaskSchema = {
    name: "2022",
    properties: {
        date: "string",
        description: "string",
        month: "string",
        time: "string",
        title: "string", 
    },   
  };

  

  async function quickStart(){
    const realm = await Realm.open({
      path: "myrealm",
      schema: [TaskSchema],
    });

    

    const tasks = realm.objects('2022');
    

    tasks.map((task) => {
      setTitle((prevFilteredData) => [
        ...prevFilteredData,
  
          "    " + task.time + "\n" + task.title + "\n" + task.description
        
      ] )
      setDate((prevFilteredData) => [
        ...prevFilteredData,
  
          task.date
        
      ] )
      
    });
    // Remember to close the realm
    realm.close();



  };

  quickStart().catch((error) => {
  });
  


  const renderItem = (item) => {

    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 19, }}>
        <Card style={{backgroundColor: 'rgb(225,225,225)', borderRadius: 25}}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgb(225,225,225)',
                
              }}>
                <Text style={{fontFamily: Fonts.KANIT_LIGHT,flexDirection:'row'}}>{item.name}</Text>
               
              
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        onRefresh={() => {quickStart(); 
          Agenda.items={items};
          loadItems();   
          Agenda.renderItem=renderItem(items);}
        } 
        refreshing={false}
        refreshControl={null}
        renderItem={renderItem}
        
        

        theme={{
          agendaDayTextColor: 'rgb(100,100,100)',
          agendaDayNumColor: 'rgb(100,100,100)',
          agendaTodayColor: 'red',
          agendaKnobColor: 'rgb(200,200,200)',
          backgroundColor: 'rgb(211,211,211)', 
          calendarBackground: 'rgb(245,245,245)',
          textDayFontFamily: Fonts.KANIT_REGULAR,
          textMonthFontFamily: Fonts.KANIT_MEDIUM,
          todayButtonFontFamily: Fonts.KANIT_LIGHT,
          textDayHeaderFontFamily: Fonts.KANIT_LIGHT,
          monthTextColor: 'rgb(100,100,100)',
          dayTextColor: 'rgb(100,100,100)',
          todayTextColor: 'rgb(100,100,100)',
          }}
      />
    </View>
  );
};

export default DayComponent;