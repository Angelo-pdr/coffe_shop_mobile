import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import Home from "../pages/home";
import Favorite from "../pages/favorite";
import Notification from "../pages/notification";
import Shop from "../pages/shop";


const Tab = createBottomTabNavigator();

function Routes(){
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: "#0C0F14",
                borderTopWidth: 0,
                height: 70,
                justifyContent: "center",
                alignItems: "center"
            },
            tabBarActiveTintColor: "#D17842",
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon:({focused, color}) => {
                    if(focused){
                        return <MaterialIcons name="home" size={24} color={color} />
                    }
                    return <MaterialIcons name="home" size={24} color="#4E5053" />
                }
            }} />
            <Tab.Screen name="Shop" component={Shop} options={{
                tabBarIcon:({focused, color}) => {
                    if(focused){
                        return <MaterialIcons name="shopping-bag" size={24} color={color} />
                    }
                    return <MaterialIcons name="shopping-bag" size={24} color="#4E5053" />
                }
            }} />
            <Tab.Screen name="Favorite" component={Favorite} options={{
                tabBarIcon:({focused, color}) => {
                    if(focused){
                        return <MaterialIcons name="favorite" size={24} color={color} />
                    }
                    return <MaterialIcons name="favorite" size={24} color="#4E5053" />
                }
            }} />
            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarIcon:({focused, color}) => {
                    if(focused){
                        return <Ionicons name="notifications" size={24} color={color} />
                    }
                    return <Ionicons name="notifications" size={24} color="#4E5053" />
                }
            }} />
        </Tab.Navigator>
    )
}

export default Routes