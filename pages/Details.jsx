import { Button, View, Text } from "react-native";
import * as React from "react";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Contact")}
      /> */}
    </View>
  );
};
export default DetailsScreen;
