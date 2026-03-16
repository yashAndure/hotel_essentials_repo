import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "../navigation/TabNavigator";
import ProductDetailsScreen from "./ProductDetailsScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />

    </Stack.Navigator>
  );
}