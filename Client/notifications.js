const statusDiv = document.querySelector("#connectionStatus")

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

connection.onclose(() => {
    statusDiv.innerHTML = "Bağlantı koptu..";
    statusDiv.className = "red";
})

connection.onreconnected((arg) => {
    statusDiv.innerHTML = "Bağlandı";
    statusDiv.className = "green";
})

connection.onreconnecting((arg) => {
    statusDiv.innerHTML = "Bağlanıyor";
    statusDiv.className = "orange";
})

connection.on('NewBrandAdded', (brand) => console.log(brand));

connection.start().then(() => {
    statusDiv.innerHTML = "Bağlandı";
    statusDiv.className = "green";
});