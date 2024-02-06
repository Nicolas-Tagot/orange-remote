import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Modal, Text, Pressable, Dimensions, SafeAreaView, TextInput } from "react-native"

const _width  = Dimensions.get('screen').width * 0.5

  const styles = StyleSheet.create({
    header: {
      height: "7%",
      marginTop: "7%",
      width: '100%',
      backgroundColor: '#FD7A01',
      paddingLeft: "3%",
      justifyContent: 'center',
      shadowColor: '#000',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#FD7A01',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    image: {
      width: 20,
      height: 20,
      tintColor: 'white'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [number, onChangeNumber] = React.useState(null);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
    return (
        <View style={styles.header}
        >
            <TouchableOpacity onPress={() => handleClick()}>
          <Image source={require('../../assets/icons/help.png')} style={styles.image}/>
          </TouchableOpacity>
          <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          setIsOpen(!false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Application télécommande Orange</Text>
            <Text style={styles.modalText}>[non officiel]</Text>
            <Text style={styles.modalText}>Version 1.0.0</Text>
            <Text style={styles.modalText}>Développé par : M.Gâteau</Text>
            <Text style={styles.modalText}>Pour changer l'adresse de la box</Text>
            <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="192.168.1.1"
        keyboardType="numeric"
      />
    </SafeAreaView>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsOpen(false)}>
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        </View>
    )
}

export default Header