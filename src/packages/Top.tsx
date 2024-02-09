import { View, StyleSheet } from "react-native"
import Single from "./Middle/Single"


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  });

const Top = () => {
    const top = require('../../assets/icons/btn-on.png')

    return <View style={styles.container}>
        <Single value="116" image={top} />
    </View>
}

export default Top