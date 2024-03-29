import { View, StyleSheet } from "react-native"
import Single from "./Middle/Single";
import Duo from "./Bottom/Duo";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });

const Middle = () => {
    const top = require('../../assets/icons/top.png')
    const left = require('../../assets/icons/left.png')
    const right = require('../../assets/icons/right.png')
    const bottom = require('../../assets/icons/bottom.png')



    const ok = require('../../assets/icons/ok.png')
    return <View style={styles.container}>
        <Single value="103"  image={top}/>
        <Duo  top="105" bottom="106" topImage={left} bottomImage={right} isRow/>
        <Single value="108" image={bottom}/>
        <Single value="352" image={ok}/>
    </View>
}

export default Middle