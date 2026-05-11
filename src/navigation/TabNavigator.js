import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import CatalogScreen from "../screens/CatalogScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    
    <View style={{ flex: 1, backgroundColor: "#0B0E18" }}>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: "#0B0E18" }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#E32F45",
          tabBarInactiveTintColor: "#7b809a",
          tabBarStyle: {
           
            marginBottom: 15, 
            marginHorizontal: 20,
            
            backgroundColor: "#1c1c22",
            borderRadius: 35,
            height: 70,
            borderTopWidth: 0,
            elevation: 5,
            overflow: "visible", 
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold",
            textTransform: "uppercase",
            paddingBottom: 5, 
          },
          tabBarItemStyle: {
            paddingTop: 10,
          },

          tabBarIcon: ({ color, size, focused }) => {
           
            if (route.name === "Cart") {
              return (
                <View style={styles.customCartContainer}>
                  <View style={styles.cartButton}>
                    <Ionicons name="cart" size={30} color="#fff" />
                  </View>
                </View>
              );
            }

            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Catalog") {
              iconName = focused ? "grid" : "grid-outline";
            } else if (route.name === "Orders") {
              iconName = focused ? "receipt" : "receipt-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Catalog" component={CatalogScreen} />
        <Tab.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{ tabBarLabel: "Cart" }} 
        />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  customCartContainer: {
    top: -20, 
    justifyContent: "center",
    alignItems: "center",
  },
  cartButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ff001ede", 
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#1c1c22", 
    
    shadowColor: "#ff001ede",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 10, 
    elevation: 8, 
  },
});