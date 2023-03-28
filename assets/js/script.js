let botoes = document.querySelectorAll('.btn-avaliacao')
let btn = document.querySelector('.btn')

function capturarBotao(index) {
    let nota = document.querySelector('.nota')
    nota.innerText = `You selected ${index} out or 5`
    botoes[index].style.background = 'hsl(217, 12%, 63%)'
    botoes[index].style.color = 'white'
    console.log(index)
}

function enviarSubmit() {
    let modal = document.querySelector('.modal')
    let main = document.querySelector('main')
    modal.classList.add('ativo')
    main.classList.add('ativo')
    capturarBotao(index)
}

btn.addEventListener('click', enviarSubmit)
