import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Fonts } from "../../src/contants";

const ListItem = ({item, deleteItem}) => {
    

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
          <Text style={styles.listItemText}>
              {item.title} <Text>    </Text>
              
          </Text>
          
          
      </View>
      <View style={{justifyContent: "space-between", flexDirection: "row",}}>
          <Text style={styles.listTimeText}>
                {item.time}  
            
            </Text><Text>    </Text>
            <Text style={styles.importantDay}>
                {item.date}
            </Text>
          </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        borderBottomWidth: 1,
        // borderColor: '#eee',  
        margin: 5 , 
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    listItemView: {
        
        flex: 0.9,
        
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
        height: 23,
        textAlign: "center",
        fontFamily: Fonts.KANIT_MEDIUM,
        flexDirection: "row",
        justifyContent: 'space-between',
        
    }, 
    listTimeText: {
        fontSize: 16,
        fontFamily: Fonts.KANIT_LIGHT,
        marginLeft: 20
        
    }
    
})

export default ListItem;