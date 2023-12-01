const connection = new signalR
    .HubConnectionBuilder()
    .withUrl("https://localhost:7285/api/chat", { skipNegotiation: true, transport: signalR.HttpTransportType.WebSockets })
    .build();

connection.start()

// Client tarafından Sunucu tarafını execute etmek
setTimeout(() => {
    connection.invoke("SendMessage", "merhaba").catch((err) => console.log("Gönderilemedi:", err));
}, 3000);

connection.on('MessageReceived', (message) => {
    console.log("Sunucudan bir mesaj geldi: " + message);
})