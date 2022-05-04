import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "../screens";
import { DatePickerComponent, SearchComponent, TodoListComponent } from '../../components';



const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Group>
                    <Stack.Screen name="Splash" component={SplashScreen}/>
                    <Stack.Screen name="PressSearch" component= {SearchComponent} />
                    <Stack.Screen name="PressNewEvent" component={DatePickerComponent}/>
                    <Stack.Screen name="PressToDoList" component={TodoListComponent} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;