import { TouchableOpacity, View, Image, StyleSheet, ImageProps } from "react-native"
import { sendAction } from "../../services/sendAction"

type Props = {
    top: string,
    bottom: string
    topImage: ImageProps | Readonly<ImageProps>
    bottomImage: ImageProps | Readonly<ImageProps>
    isRow?: boolean
}

const styles = StyleSheet.create({
    row: {
      flex: 1,
    flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    column: {
        flex: 1,
        flexDirection: "column",
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
      tintColor: 'orange'
    },
  });

const Duo = (props: Props) => {

    const handleClick = (id: string): void => {
        console.log('id', id)
        sendAction(id)
      }

    return <View style={props.isRow ? styles.row : styles.column}>
           <TouchableOpacity style={styles.button} onPress={() => handleClick(props.top)}>
      <Image source={props.topImage} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleClick(props.bottom)}>
      <Image source={props.bottomImage} style={styles.image}/>
      </TouchableOpacity>
    </View>
} 

export default Duo