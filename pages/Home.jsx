import * as React from "react";
import { Button, View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("Contact")}
      />
    </View>
  );
};
export default HomeScreen;
