import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./src/navigation/TabNavigator";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen"; 
import LinensScreen from "./src/screens/LinensScreen"; 
import KitchenwareScreen from "./src/screens/KitchenwareScreen";
import TablewareScreen from "./src/screens/TablewareScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Linens" component={LinensScreen} />
        <Stack.Screen name="Kitchen" component={KitchenwareScreen} />
        <Stack.Screen name="Tableware" component={TablewareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}