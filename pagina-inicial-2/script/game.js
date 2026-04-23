function addMoney(button){
    let painel = button.parentElement
    let id = painel.id
    let input = painel.querySelector('input[type="text"]')
    let valor = Number(input.value.replace(/\D/g, '')) / 100
    money[id] = money[id] + valor

    let pMoney = painel.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",")
}

function subMoney(button){
    let painel = button.parentElement
    let id = painel.id
    let input = painel.querySelector('input[type="text"]')
    let valor = Number(input.value.replace(/\D/g, '')) / 100
    money[id] = money[id] - valor

    let pMoney = painel.querySelector('.initCashInGame')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",")
}
