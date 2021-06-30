const socket = io('http://localhost:8000')
const alertBox = document.getElementById('alert-box')
const messageBox = document.getElementById('messages-box')
const messageInput = document.getElementById('message-input')
const sendBtn = document.getElementById('send-btn')

// socket.on('welcome',msg =>{
//     console.log(msg)
// })

const handleAlerts= (msg,type) => {
    alertBox.innerHTML = `
    <div class="alert alert-${type}" role="alert">
      ${msg}
    </div>
    `
    setTimeout(() => {
        alertBox.innerHTML=""
    },12000)
}

socket.on('welcome2',msg =>{
    handleAlerts(msg,"primary")
})
socket.on('byebye',msg =>{
    handleAlerts(msg,"danger")
})

sendBtn.addEventListener('click',() => {
    const message=messageInput.value
    messageInput.value=""

    socket.emit('message',message)
})

socket.on('messagetoClients',msg =>{
    messageBox.innerHTML +=`<b>${msg}</b><br>`
})