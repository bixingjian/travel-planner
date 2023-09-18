import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello World!</Text>
      <TouchableOpacity onPress={() => console.log("image tapped")}>
        <Image
          blurRadius={7}
          style={styles.stretch}
          source={require("./assets/adaptive-icon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("image tapped")}
        style={{ backgroundColor: "orange" }}
      >
        <Button
          title="Click Me"
          onPress={() =>
            // Alert.alert("My Title", "My Message", [
            //   { text: "Yes", onPress: () => console.log("Yes") },
            //   { text: "No", onPress: () => console.log("No") },
            // ])
            Alert.prompt("My Title", "My Message", (text) => console.log(text))
          }
        />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },
});
