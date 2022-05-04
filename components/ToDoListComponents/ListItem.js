import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button,  } from 'react-native';
import { Fonts } from "../../src/contants";

const ListItem = ({item, deleteItem}) => {
    

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
          <Text style={styles.listItemText}>
            {item.title} 
            
          </Text>
         
      </View>
      <View style={styles.listItemViewByDate}>
                <Text style={styles.dateItemText}>เวลา {item.time} วันที่ {item.date} </Text>
      </View>
    </TouchableOpacity>
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
      paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        

    },
    dateItemText: {
      fontFamily: Fonts.KANIT_LIGHT,
      fontSize: 14,
    },
    listItemViewByDate: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
    listItemText: {
        fontSize: 16,
        fontFamily: Fonts.KANIT_REGULAR
        
    },
    importantDay: {
        fontSize: 17,
        backgroundColor: 'rgb(183, 128, 207)',
        borderRadius: 8,
        width: 100,
        textAlign: "center",
        fontFamily: Fonts.KANIT_MEDIUM,
        
    }
    
})

export default ListItem;