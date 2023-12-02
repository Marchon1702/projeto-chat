const geralChat = document.querySelector('.geral-chat')
let baseHome, baseOut
let boxHome, boxOut 
let mensagemHome, mensagemOut
let vez = 0

function mudaVez() {
    vez = vez === 0 ? vez = 1 : vez = 0
}

function timeMessage() {
    let horaMsg = new Date()
    let horas = horaMsg.getHours() < 10 ? `0${horaMsg.getHours()}`: horaMsg.getHours()
    let minutos = horaMsg.getMinutes() < 10 ? `0${horaMsg.getMinutes()}`: horaMsg.getMinutes()
    const espacoHora = document.createElement('p')
    espacoHora.setAttribute('class', 'time-msg')
    if(vez === 0) {        
        mensagemHome.appendChild(espacoHora)
        espacoHora.innerHTML = `Hoje ${horas}:${minutos}`
    } else {
        mensagemOut.appendChild(espacoHora)
        espacoHora.innerHTML = `Hoje ${horas}:${minutos}`
    }
    
}

function gerarHTML() {
    const inputMensagem = document.querySelector('#typer')
    if(vez === 0) {
        baseHome = document.createElement('section')
        geralChat.appendChild(baseHome)
        baseHome.setAttribute('class', 'messages')       
        boxHome = document.createElement('div')
        baseHome.appendChild(boxHome)
        boxHome.setAttribute('class', 'style-home')
        mensagemHome = document.createElement('p')
        mensagemHome.classList.add('style-text')
        boxHome.appendChild(mensagemHome)
        mensagemHome.innerHTML = inputMensagem.value
    } else {
        baseOut = document.createElement('section')
        geralChat.appendChild(baseOut)
        baseOut.setAttribute('class', 'messages-Out')
        boxOut = document.createElement('div')
        baseOut.appendChild(boxOut)
        boxOut.setAttribute('class', 'style-out')
        mensagemOut = document.createElement('p')
        mensagemOut.classList.add('style-text')
        boxOut.appendChild(mensagemOut)
        mensagemOut.innerHTML = inputMensagem.value
    }
    
}

function sendMessage() {
    if(inputMensagem.value === '') return
    gerarHTML()
    timeMessage()
    inputMensagem.value = ''
    inputMensagem.focus()
    mudaVez()
}

const button = document.querySelector('#send-button')
button.addEventListener('click', sendMessage)
const inputMensagem = document.querySelector('#typer')
inputMensagem.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        sendMessage()
    }
})
