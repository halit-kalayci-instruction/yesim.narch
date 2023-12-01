const groupInput = document.querySelector("#group")
const button = document.querySelector("#joinBtn")

const connection = new signalR
    .HubConnectionBuilder()
    .withUrl("https://localhost:7285/api/notificationhub",
        {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
            // accessTokenFactory: () => { return tokenInput.value }
        })
    .withAutomaticReconnect([5000, 5000])
    .build();

connection.on('NewUser', (info) => console.log(info));

connection.start().then(() => {

});

button.addEventListener('click', () => {
    connection.invoke("JoinGroup", groupInput.value)
})