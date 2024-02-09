import { View, StyleSheet } from "react-native"
import Duo from "./Bottom/Duo";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
  });

const Bottom = () => {
    const top = require('../../assets/icons/plus.png')
    const bottom = require('../../assets/icons/min.png')

    return <View style={styles.container}>
        <Duo top="" bottom="" topImage={top} bottomImage={bottom}/>
        <Duo top="" bottom="" topImage={top} bottomImage={bottom}/>
    </View>
}

export default Bottom