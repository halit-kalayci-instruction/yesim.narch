const input = document.querySelector("#message")
const btn = document.querySelector("#sendBtn")
const connectBtn = document.querySelector("#connectBtn")
const connectedUserList = document.querySelector("#connectedUserList");
const tokenInput = document.querySelector("#token");

let connectionId;
const connection = new signalR
    .HubConnectionBuilder()
    .withUrl("https://localhost:7285/api/chat",
        {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
            accessTokenFactory: () => { return tokenInput.value }
        })
    .build();

// on fonksiyonları
connection.on('MessageReceived', (message) => {
    console.log("Sunucudan bir mesaj geldi: " + message);
})

connection.on('ConnectedToHub', (id) => {
    connectionId = id;
})

connection.on("NewConnection", (clients) => {
    connectedUserList.innerHTML = "";
    clients.forEach(client => {
        let liElement = document.createElement("li");
        liElement.innerHTML = client;
        connectedUserList.appendChild(liElement);
    })
})

connectBtn.addEventListener('click', () => {
    connection.start().then(() => { })
})


// Client tarafından Sunucu tarafını execute etmek

btn.addEventListener('click', () => {
    connection.invoke("SendMessage", input.value).catch((err) => console.log("Gönderilemedi:", err));
})
