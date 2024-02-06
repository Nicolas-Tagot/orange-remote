import { getAdress } from "./adress";

const getUrl = async (id: string): Promise<string> =>{
    const liveBox = await getAdress()
    return `${liveBox}:8080/remoteControl/cmd?operation=${id}`;
}  
export const sendAction = async (id: string): Promise<void> => {
    const url = await getUrl(id)
    console.log(url)
    fetch(url).catch((error) => {
        console.log('Error sending action', error);
    })
}