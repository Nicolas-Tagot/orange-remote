import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveAdress = async (port: string) => {
  try {
    await AsyncStorage.setItem('port', port);
  } catch (e) {
    console.log('Error saving port', e);
  }
};

export const getAdress = async (): Promise<string> => {
    try {
        const value = await AsyncStorage.getItem('port');
        if (value !== null) {
        return value;
        } else {
            return "191.164.1.1"; // TODO Find the good address
        }
    } catch (e) {
        console.log('Error getting adress', e);
    }
    }