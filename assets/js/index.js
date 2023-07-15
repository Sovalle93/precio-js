function Calcular(){
    let amount = document.querySelector('#amount')
    let color = document.querySelector('#color')
    let price = document.querySelector('p #price')
    let total = document.querySelector('p #totalPrice')
    let totalAmount = document.querySelector('p #totalAmount')
    let colorInput = document.querySelector ('#colorCircle')
    let cantidad = Number(amount.value)
    let totalPrice = cantidad * 400000
    total.innerHTML = totalPrice
    totalAmount.innerHTML = cantidad
    colorInput.style.backgroundColor = color.value
}

