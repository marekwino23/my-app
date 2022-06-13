import { Button, View, Text } from "react-native";
import * as React from "react";

const Contact = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contact Screen</Text>
      {/* <Button
        title="Go to Contact Section"
        onPress={() => navigation.navigate("Contact")}
      /> */}
    </View>
  );
};
export default Contact;
