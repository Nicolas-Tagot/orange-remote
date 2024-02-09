import { getAdress } from "./adress";

const getUrl = async (id: string): Promise<string> =>{
    const liveBox = await getAdress()
    return `http://${liveBox}:8080/remoteControl/cmd?operation=01&key=${id}&mode=0`;
}  
export const sendAction = async (id: string): Promise<void> => {
    const url = await getUrl(id)
    fetch(url).catch((error) => {
        console.log('Error sending action', error);
    })
}