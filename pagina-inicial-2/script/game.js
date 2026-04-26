
let activePlayer = null
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

function openPopup(message){
    let popup = document.querySelector('#popup')
    let msg = document.querySelector('#popupMsg')

    msg.textContent = message
    popup.style.display = 'flex'
}

function closePopup(){
    let popup = document.querySelector('#popup')
    let input = document.querySelector('#popupInput')

    popup.style.display = 'none'
    input.value = ''
}

function loan (button){
    activePlayer = button.parentElement
    openPopup("Digite o valor do empréstimo (máx R$ 300.000,00):")
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
        alert("Digite um valor válido!")
        return
    }

    money[id] = money[id] + balance
    loans[id] = loans[id] + balance

    let pMoney = activePlayer.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",")
    closePopup()

    let ocults = activePlayer.querySelectorAll('.ocult')
    ocults.forEach(el => el.style.display = 'block')

    let pLoan = activePlayer.querySelector('.ocult')
    pLoan.textContent = "Empréstimo ativo: R$ " + loans[id].toFixed(2).replace(".", ",")
    checkMoney(id, activePlayer)
}

function addMoney(button){
    let painel = button.parentElement
    let id = painel.id
    let input = painel.querySelector('input[type="text"]')
    let valor = Number(input.value.replace(/\D/g, '')) / 100
    money[id] = money[id] + valor

    let pMoney = painel.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",")
    checkMoney(id, painel)
}

function subMoney(button){
    let painel = button.parentElement
    let id = painel.id
    let input = painel.querySelector('input[type="text"]')
    let valor = Number(input.value.replace(/\D/g, '')) / 100
    money[id] = money[id] - valor

    let pMoney = painel.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",")
    checkMoney(id, painel)
}

function fullTurn(button){
    let painel = button.parentElement
    let id = painel.id
    let moneyTurn = 50000
    money[id] = money[id] + moneyTurn

    let pMoney = painel.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",")

    turns[id] = turns[id] + 1

    if (turns[id] % 2 === 0 && loans[id] > 0) {
        loans[id] = loans[id] + 30000
        openNotification("Juros de R$ 30.000,00 adicionados ao empréstimo!")

        let pLoan = painel.querySelector('.ocult')
        pLoan.textContent = "Empréstimo ativo: R$ " + loans[id].toFixed(2).replace(".", ",")
    }
}

function payLoan(button){
    let painel = button.parentElement
    let id = painel.id
    money[id] = money[id] - loans[id]
    loans[id] = 0

    let pMoney = painel.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",")
    let ocults = painel.querySelectorAll('.ocult')
    ocults.forEach(el => el.style.display = 'none')
}

function collapse(button){
    let painel = button.parentElement
    let id = painel.id
    
    painel.innerHTML = '<p> FALIDO 💸 </p>'
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

    confirmBtn.textContent = 'OK'
    confirmBtn.onclick = closePopup

    openPopup(message)
}

function closePopup() {
    let input = document.querySelector('#popupInput')
    let cancelBtn = document.querySelector('#popupCancel')
    let confirmBtn = document.querySelector('#popupConfirm')

    input.style.display = 'block'
    cancelBtn.style.display = 'block'
    confirmBtn.textContent = 'Confirmar'
    confirmBtn.onclick = confirmLoan

    let popup = document.querySelector('#popup')
    popup.style.display = 'none'
    input.value = ''
}