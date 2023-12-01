const groupInput = document.querySelector("#group")
const connectBtn = document.querySelector("#connectBtn")
const tokenInput = document.querySelector("#token");


const select = document.querySelector("#roleSelect");
const messageInput = document.querySelector("#message");
const sendBtn = document.querySelector("#sendBtn");

const connection = new signalR
    .HubConnectionBuilder()
    .withUrl("https://localhost:7285/api/notificationhub",
        {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
            accessTokenFactory: () => { return tokenInput.value }
        })
    .withAutomaticReconnect([5000, 5000])
    .build();

connection.on('NewUser', (info) => console.log(info));

connection.on('MessageReceived', (message) => console.log("Yeni bir duyuru var: ", message))

connectBtn.addEventListener('click', () => {
    connection.start().then(() => { })
})

sendBtn.addEventListener('click', () => {
    connection.invoke("SendMessage", { group: select.value, message: messageInput.value })
})
