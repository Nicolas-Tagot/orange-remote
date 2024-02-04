import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity } from "react-native";

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
});

const handleClick = (event) => {
  const id = event.target.id
  sendAction(id)
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button
  icon={{
    name: "arrow-right",
    size: 15,
    color: "white"
  }}
  title="Button with icon object"
  onPress={(e) => handleClick(e)}
      />
            <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
