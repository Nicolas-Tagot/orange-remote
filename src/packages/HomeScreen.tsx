import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity, Image } from "react-native";
import { sendAction } from '../services/sendAction'
import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
    tintColor: 'white'
  },
});



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Top />
      <Middle />
      <Bottom />
    </View>
  );
};

export default HomeScreen;
