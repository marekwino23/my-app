import { StatusBar } from "expo-status-bar";
import React from "react";
import { makeAutoObservable } from "mobx";
// import { observer } from "mobx-react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ title: "Return" }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{ title: "Return" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
