const input = document.querySelector("#message")
const btn = document.querySelector("#sendBtn")

let connectionId;
const connection = new signalR
    .HubConnectionBuilder()
    .withUrl("https://localhost:7285/api/chat", { skipNegotiation: true, transport: signalR.HttpTransportType.WebSockets })
    .build();

// on fonksiyonları
connection.on('MessageReceived', (message) => {
    console.log("Sunucudan bir mesaj geldi: " + message);
})

connection.on('ConnectedToHub', (id) => {
    connectionId = id;
})

connection.start().then(() => { })

// Client tarafından Sunucu tarafını execute etmek

btn.addEventListener('click', () => {
    connection.invoke("SendMessage", input.value).catch((err) => console.log("Gönderilemedi:", err));
})