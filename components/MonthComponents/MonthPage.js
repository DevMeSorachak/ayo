import React from 'react';
import { Fonts } from '../../src/contants';
import { CalendarList } from 'react-native-calendars'
const MonthPage = () => {

    return(
        <>
            <CalendarList
                
                
                pastScrollRange={50}
                futureScrollRange={50}
                scrollEnabled={true}
                showScrollIndicator={true}
                
                theme={{
                    textDayFontFamily: Fonts.KANIT_REGULAR,
                    textMonthFontFamily: Fonts.KANIT_MEDIUM,
                    todayButtonFontFamily: Fonts.KANIT_LIGHT,
                    textDayHeaderFontFamily: Fonts.KANIT_LIGHT,
                    monthTextColor: 'rgb(100,100,100)',
                    dayTextColor: 'rgb(100,100,100)',
                    
                    "stylesheet.calendar.header": {
                        week: {
                            flexDirection: "row" ,
                            justifyContent: "space-evenly",
                            flex: 1
                        }, dayTextAtIndex0: {
                            color: 'red'
                        },
                          dayTextAtIndex6: {
                            color: 'blue'
                        }
                    },
    
                }}
            />
        </>
    )
}


export default MonthPage;