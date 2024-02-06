import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity } from "react-native";
import { sendAction } from '../services/sendAction'
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

const handleClick = (id: string): void => {
  console.log('id', id)
  sendAction(id)
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button
  title="Button with icon object"
  onPress={() => handleClick("1")}
      />
            <TouchableOpacity style={styles.button} onPress={() => handleClick('2')}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
