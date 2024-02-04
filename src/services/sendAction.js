const liveBox = '192....'
const url = (id) =>  `http://${liveBox}:8080/remoteControl/cmd?operation=${id}`;

const sentAction = (id) => {
    fetch(url(id)).catch((error) => {
        console.log('Error sending action', error);
    })
}