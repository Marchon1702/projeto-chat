const geralChat = document.querySelector('.geral-chat')
let baseHome, baseOut
let mensagemHome, mensagemOut
let vez = 0

function mudaVez() {
    if (vez === 0) {      
        vez = 1
    } else if (vez === 1) {       
        vez = 0
    }   
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
    } else if (vez === 1) {
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
        mensagemHome = document.createElement('p')
        mensagemHome.classList.add('home-msg')
        baseHome.appendChild(mensagemHome)
        mensagemHome.innerHTML = inputMensagem.value
    } else if (vez === 1) {
        baseOut = document.createElement('section')
        geralChat.appendChild(baseOut)
        baseOut.setAttribute('class', 'messages-Out')
        mensagemOut = document.createElement('p')
        mensagemOut.classList.add('out-msg')
        baseOut.appendChild(mensagemOut)
        mensagemOut.innerHTML = inputMensagem.value
    }
    
}

function sendMessage() {
    if(inputMensagem.value === '') return
    if(vez === 0) {
        gerarHTML()  
        timeMessage()    
    } else if (vez === 1) {
        gerarHTML()
        timeMessage()
    }
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
