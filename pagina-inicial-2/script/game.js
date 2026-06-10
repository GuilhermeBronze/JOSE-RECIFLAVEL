
let activePlayers = {
    p1: true,
    p2: true,
    p3: false,
    p4: false,
    p5: false,
    p6: false

}
let loans = {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0
}
let turns = {
    p1: 0, 
    p2: 0, 
    p3: 0,
    p4: 0, 
    p5: 0, 
    p6: 0
}

let loanTurns = {
    p1: 0, 
    p2: 0, 
    p3: 0,
    p4: 0, 
    p5: 0, 
    p6: 0
}

function playersTrue(){

    let playerCountF = document.querySelector('#playerCount')
    let playerCount = Number(playerCountF.value)
    

    switch (playerCount) {
        case 2:
            alert("beterraba")
            break;
    
        case 3:
            activePlayers[p3] = true
            break

        case 4:
            activePlayers[3] = true
            activePlayers[4] = true

            break

        case 5:
            activePlayers[3] = true
            activePlayers[4] = true
            activePlayers[5] = true

            break

        case 6:
            activePlayers[3] = true
            activePlayers[4] = true
            activePlayers[5] = true
            activePlayers[6] = true

            break

    }
}
function openPopup(message){
    let popup = document.querySelector('#popup')
    let msg = document.querySelector('#popupMsg')

    msg.textContent = message
    popup.style.display = 'flex'
}

function openPopup2(message){
    let popup = document.querySelector('#popup2')
    let msg = document.querySelector('#popupMsg2')

    msg.textContent = message
    popup.style.display = 'flex'
}

function openPopup3(message){
    let popup = document.querySelector('#popup3')
    let msg = document.querySelector('#popupMsg3')

    msg.textContent = message
    popup.style.display = 'flex'
}

function closePopup(){
    let popup = document.querySelector('#popup')
    let input = document.querySelector('#popupInput')

    popup.style.display = 'none'
    input.value = ''
}

function closePopup2(){
    let popup = document.querySelector('#popup2')
    let input = document.querySelector('#popupInput2')

    popup.style.display = 'none'
    input.value = ''
}

function editName (button){
    activePlayer = button.parentElement
    openPopup2("Digite o nome do jogador: ")
}

function loan (button){
    activePlayer = button.parentElement
    openPopup("Digite o valor do empréstimo (Max: R$ 300.000):")
}

function confirmName(){
    let input = document.querySelector('#popupInput2').value
    let id = activePlayer.id
    let pName = activePlayer.querySelector('.playerName')
    pName.textContent = input
    closePopup2()
}

function confirmLoan(){
    let input = document.querySelector('#popupInput')
    let balance = Number(input.value.replace(/\D/g,'')) / 100
    let id = activePlayer.id

    if (loans[id] > 0){
        openNotification("Você ja tem um emprétimo ativo! Quite-o antes de pegar outro.")
        return
    }
    
    if (balance > 300000){
        openNotification("O valor máximo para um empréstimo é de R$300.000,00!")
        return
    }

    money[id] = money[id] + balance
    loans[id] = loans[id] + balance

    let pMoney = activePlayer.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",").replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,").replace(/(\d)(\d{3}),/g, "$1.$2,")
    closePopup()

    let ocults = activePlayer.querySelectorAll('.ocult')
    ocults.forEach(el => el.style.display = 'block')

    loanTurns[id] = 0

    let pLoan = activePlayer.querySelector('.ocult')
    pLoan.textContent = "Empréstimo ativo: R$ " + loans[id].toFixed(2).replace(".", ",").replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,").replace(/(\d)(\d{3}),/g, "$1.$2,")
    checkMoney(id, activePlayer)
}

function addMoney(button){
    let painel = button.parentElement
    let id = painel.id
    let input = painel.querySelector('input[type="text"]')
    let valor = Number(input.value.replace(/\D/g, '')) / 100
    money[id] = money[id] + valor

    let pMoney = painel.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",").replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,").replace(/(\d)(\d{3}),/g, "$1.$2,").replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,").replace(/(\d)(\d{3}),/g, "$1.$2,")
    checkMoney(id, painel)
    let initial = painel.querySelector('.initialInput')
    initial.value = "R$ 0,00"
}

function subMoney(button){
    let painel = button.parentElement
    let id = painel.id
    let input = painel.querySelector('input[type="text"]')
    let valor = Number(input.value.replace(/\D/g, '')) / 100
    money[id] = money[id] - valor

    let pMoney = painel.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",").replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,").replace(/(\d)(\d{3}),/g, "$1.$2,")
    checkMoney(id, painel)
    let initial = painel.querySelector('.initialInput')
    initial.value = "R$ 0,00"
}

function fullTurn(button){
    let painel = button.parentElement
    let id = painel.id
    let moneyTurn = 50000
    money[id] = money[id] + moneyTurn

    let pMoney = painel.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",").replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,").replace(/(\d)(\d{3}),/g, "$1.$2,")

    turns[id] = turns[id] + 1

    if (loans[id] > 0){
        loanTurns[id] = loanTurns[id] + 1
    
        if (loanTurns[id] % 2 === 0 && loans[id] > 0) {
        loans[id] = loans[id] + 30000
        openNotification("Juros de R$ 30.000,00 adicionados ao empréstimo!")

        let pLoan = painel.querySelector('.ocult')
        pLoan.textContent = "Empréstimo ativo: R$ " + loans[id].toFixed(2).replace(".", ",").replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,").replace(/(\d)(\d{3}),/g, "$1.$2,")
    }
    }
}

function payLoan(button){
    let painel = button.parentElement
    let id = painel.id
    money[id] = money[id] - loans[id]
    loans[id] = 0

    let pMoney = painel.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",").replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,").replace(/(\d)(\d{3}),/g, "$1.$2,")
    let ocults = painel.querySelectorAll('.ocult')
    ocults.forEach(el => el.style.display = 'none')
}

function showWinner(name) {
    openPopup2("Você estuprou o resto jogador: " + name )
} 

function checkWinner() {
    let playersStanding = Object.keys(activePlayers).filter(id => activePlayers[id] === true)
    alert(playersStanding)
    if (playersStanding.length === 1) {
        let idWinner = playersStanding[0]
        let painel = document.querySelector('#' + idWinner)
        let name = painel.querySelector('.playerName').textContent.trim()
        openPopup3(name)
    }

}

function collapse(button){
    let painel = button.parentElement
    let id = painel.id
    let name = painel.querySelector('.playerName').textContent.trim()
    let chance = Math.random()
    activePlayers[id] = false
 
    
    if(chance > 0.99){
    painel.innerHTML = name + '<img src="media/PRERIGO.png" alt="PRERIGO" class="caveira">'
    }else if(chance < 0.01){
    painel.innerHTML = name + '<img src="media/YO-HO-HO.png" alt="YO-HO-HO" class="caveira">'
    }else if(chance === 0.1707){
    painel.innerHTML = name + '<img src="media/CINEMA.png" alt="ABSOLUTE CINEMA" class="caveira">'
    } else{
    painel.innerHTML = name + '<img src="media/FALIDO.png" alt="Falido" class="caveira">'
    }
    checkWinner()
}
function checkMoney(id, painel){
    if (money[id] < 0){
        let btnCollapse = painel.querySelector('.ocultCollapse')
        btnCollapse.style.display = 'block'
    } else {
        let btnCollapse =painel.querySelector('.ocultCollapse')
        btnCollapse.style.display = 'none'
    }
}

function openNotification(message) {
    let input = document.querySelector('#popupInput')
    let cancelBtn = document.querySelector('#popupCancel')
    let confirmBtn = document.querySelector('#popupConfirm')

    input.style.display = 'none'
    cancelBtn.style.display = 'none'

    confirmBtn.textContent = 'Desculpa Chefe'
    confirmBtn.onclick = closePopup

    openPopup(message)
}

function closePopup() {
    let input = document.querySelector('#popupInput')
    let cancelBtn = document.querySelector('#popupCancel')
    let confirmBtn = document.querySelector('#popupConfirm')

    input.style.display = 'block'
    cancelBtn.style.display = 'block'
    confirmBtn.textContent = 'Realizar empréstimo'
    confirmBtn.onclick = confirmLoan

    let popup = document.querySelector('#popup')
    popup.style.display = 'none'
    input.value = ''
}