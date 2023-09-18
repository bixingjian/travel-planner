import React from "react";
import {
  Dimensions,
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
  useWindowDimensions,
} from "react-native";

export default function App() {
  console.log(useWindowDimensions());
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: width > height ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },
});
