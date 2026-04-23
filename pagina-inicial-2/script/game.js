let money = {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0
}

function addMoney(button){
    let painel = button.parentElement
    let id = painel.id
    let input = painel.querySelector('input[type="text"]')
    let valor = Number(input.value.replace(/\D/g, '')) / 100
    money[id] = money[id] + valor

    let pMoney = painel.querySelector('p:nth-of-type(2)')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",")
}

function subMoney(button){
    let painel = button.parentElement
    let id = painel.id
    let input = painel.querySelector('input[type="text"]')
    let valor = Number(input.value.replace(/\D/g, '')) / 100
    money[id] = money[id] - valor

    let pMoney = painel.querySelector('p:nth-of-type(2)')
    pMoney.textContent = "Saldo: R$ " + money[id].toFixed(2).replace(".", ",")
}