const connection = new signalR
    .HubConnectionBuilder()
    .withUrl("https://localhost:7285/api/notificationhub",
        {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
            // accessTokenFactory: () => { return tokenInput.value }
        })
    .withAutomaticReconnect([5000, 10000, 15000])
    .build();

connection.on('NewBrandAdded', (brand) => console.log(brand));

connection.start();