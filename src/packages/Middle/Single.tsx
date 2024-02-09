import { TouchableOpacity, Image, StyleSheet, ImageProps } from "react-native"
import { sendAction } from "../../services/sendAction";

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

  type Props = {
    value: string
    image: ImageProps | Readonly<ImageProps>
  }

const Single = (props: Props) => {
    const handleClick = (id: string): void => {
        console.log('id', id)
        sendAction(id)
      }
    return    <TouchableOpacity style={styles.button} onPress={() => handleClick(props.value)}>
      <Image source={props.image} style={styles.image}/>
      </TouchableOpacity>
    
}

export default Single